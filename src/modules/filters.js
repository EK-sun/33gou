import Vue from 'vue'
// import path from 'path'


Vue.filter('formatImage', (url,type) => {
    // let ext = path.extname(url);
    if(type==='gang'){
        return url.replace(url, "http://www.33go.com.cn/" + url)
    }else{

        return url.replace(url, "http://www.33go.com.cn" + url)
    }

})