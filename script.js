const targetEl = document.querySelector('.target');

const loadSnippet = number => {
    fetch('./bento-box-pages/${number}.html')
        .then(res => {
            if (res.ok) {
                return res.text();
            }
        })
        .then(htmlSnippet => {
            targetEl.innerHTML = htmlSnippet;
        });
};