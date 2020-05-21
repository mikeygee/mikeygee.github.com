// parse markdown style links from strings
export function convertLinks(str = '') {
    const links = str.match(/\[[^\[]+\]\([\w:/.-]+\)/g);
    let text;
    let href;
    if (links) {
        links.forEach(link => {
            text = link.match(/\[([^\[]+)\]/);
            href = link.match(/\(([\w:/.-]+)\)/);
            str = str.replace(
                link,
                `<a href="${href[1]}" target="_blank" rel="noopener noreferrer">${text[1]}</a>`
            );
        });
        return str;
    }
    return str;
}
