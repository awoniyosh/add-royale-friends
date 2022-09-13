function createURL() {
    const tag = checkRegularExpressions();
    const element_url = document.getElementById("url");
    const element_urlarea = document.getElementById("url-area");

    if (tag) {
        // https://link.clashroyale.com/invite/friend/en?tag=GYVCJJCR0&token=2nrbpzpc&platform=iOS
        const url = "https://link.clashroyale.com/invite/friend/en?tag=" + tag;
        element_url.href = url;
        element_url.text = url;
        element_urlarea.classList.add("main-link-display");
        element_urlarea.classList.remove("main-link-none");

    } else {
        element_url.href = "";
        element_url.text = "yet";
        element_urlarea.classList.add("main-link-none");
        element_urlarea.classList.remove("main-link-display");
    }
}

// Invalid Hashtag Provided
//// You have included invalid characters in your hashtag: 1
// Hashtags should only contain these characters:
// Numbers: 0, 2, 8, 9
// Letters: P, Y, L, Q, G, R, J, C, U, V
function checkRegularExpressions() {
    const tag = document.getElementById("tag-input").value.toUpperCase();
    const fixedtag = tag.charAt(0) !== "#" ? tag : tag.slice(1);
    if (fixedtag.length > 9) return null;

    const pattern = /[0289PYLQGRJCUV]{9}$/;
    const result = fixedtag.match(pattern);
    return result ? result[0] : null;
}

// import { Deta } from 'deta';
// async function setImage() {
//     // Initialize with a Project Key
//     const deta = Deta(key); 

//     // You can create as many as you want 
//     const photos = deta.Drive('photos'); 

//     const buf = await drive.get('logo.png');
//     console.log(buf);
// }
