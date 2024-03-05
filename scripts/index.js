
function getChilds(element){
    
    for (let child of element){
        let childStr = child.innerHTML;
        if(child.tagName === 'LI' && childStr.includes("3. https://")){
            child.innerHTML = '<a href="https://ru.wikipedia.org/">3. https://ru.wikipedia.org/</a>';
            //window.location.href = "https://ru.wikipedia.org/";
        }
        if(child.tagName === 'LI' && childStr.includes("b. https://")){
            child.innerHTML = '<a href="https://www.youtube.com/">b. https://www.youtube.com/</a>';
        }
        if(child.tagName === 'LI' && childStr.includes("i. https://")){
            child.innerHTML = '<a href="https://www.google.ru/">i. https://www.google.ru/</a>';
        }
    }
}
function getLines(element){
    
    let result = '';
    let lineCount = 0;
    function traverseChildren(element, level) {
        for (let child of element.children){
            if(lineCount<1){
                result +=  '  '.repeat(level) + child.innerHTML ;
                console.log(result);
                lineCount++;
            }
            if(child.hasChildNodes() ){
                traverseChildren(child, level + 1);
            }
        }
    }
    traverseChildren(element, 0);
    return result;
}
let  link = document.querySelectorAll('li');
getChilds(link);
document.body.innerHTML = getLines(document.body);
