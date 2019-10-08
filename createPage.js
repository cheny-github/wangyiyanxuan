const pageName =process.argv[2];
const {readFile:rf,writeFile:wf,mkdir:md} = require("fs");
const  {promisify} = require("util");
const writeFile=promisify(wf);
const mkdir=promisify(md);
const capitalize  = ([first,...rest])=>first.toUpperCase()+rest.join('')
const pageTemplate = 
`<template>
    <div>
        ${pageName}
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>

</style>
`;

(async ()=>{
    try {
        await mkdir(`./src/pages/${pageName}`)
        await writeFile(`./src/pages/${pageName}/${capitalize(pageName)}.vue`,pageTemplate)
        console.log('创建页面'+pageName+'成功')
    } catch (error) {
        console.log(error)
    }
})();
