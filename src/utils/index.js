
/**
 * 
 * @param {HTMLElement} element 
 */
export function getWidthByChildren(element){
    const liNodes = [...element.children]
    return liNodes.reduce((pre,li)=>pre+li.offsetWidth,0)
}
