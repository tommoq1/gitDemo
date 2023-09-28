<template>
    <div id="a">
        <!-- <h1>22</h1>
        <h1>33</h1> -->
        <button @click="downloadFile(fileUrl,fileName)">+</button>
    </div>
</template>
<!-- 需求是做一个根据文件的url地址下载文件的功能，但是对于大文件来说下载周期较长，等待时间页面无反应，体验不够好，这时候就需要获取到文件的下载进度 -->
<script>
    export default {
        data() {
            return {
                // fileUrl: "https://tata-kujiale.oss-cn-beijing.aliyuncs.com/top-kujiale/D23990019732.zip",
                fileUrl: "https://tata-kujiale.oss-cn-beijing.aliyuncs.com/top-kujiale/D23990019678.zip",
                fileName: '文件01'
            }
        },
        methods: {
            // 方法一
            get(){
                const xhr = new XMLHttpRequest();// 创建xhr对象
                xhr.open('GET', this.fileUrl);
                // xhr.open('GET', baseUrlFun() + response.path);
                // 以get形式从后端将文件下载到本地内存，第二个参数是地址（如：/abc-api/aaaad/select/ab_2054654_UGIUG_245687684654.zip）
                xhr.send(null);
                // 设置服务端的响应类型
                xhr.responseType = "blob";
                // 监听下载
                xhr.addEventListener('progress', event => {
                    // 计算出百分比
                    const percent  = ((event.loaded / event.total) * 100).toFixed(2);
                    console.log(`下载进度：${percent}`);
                }, false);
                xhr.onreadystatechange = response => {
                    console.log(response)
                    if (xhr.status == 200){// 是否已下载到内存
                    
                    // 文件名称（自定义）
                    const fileName = this.$store.state.user.shpname;
                    
                    // 创建一个a标签用于下载（固定写法）
                    const donwLoadLink = document.createElement('a');
                    donwLoadLink.download = fileName;
                    donwLoadLink.href = URL.createObjectURL(xhr.response);
                    
                    // 触发下载事件，将从后端保存到内容的文件下载到到磁盘
                    donwLoadLink.click();
                    
                    // 释放内存中的资源
                    URL.revokeObjectURL(donwLoadLink.href);
                    console.log("下载完成")
                    } else if (response.status == 404){
                        alert(`文件不存在`);
                    } else if (response.status == 500){
                        alert('系统异常');
                    }
                }
            },
            // 方法二
            async downloadFile(fileUrl,fileName) {
                let blob = await this.getBlob(fileUrl);
                console.log(blob)
                this.saveFile(blob, fileName);
            },
            getBlob(fileUrl) {
                return new Promise(resolve => {
                    const xhr = new XMLHttpRequest();
                    xhr.open('GET', fileUrl, true);
                    //监听进度事件
                    xhr.addEventListener(
                        'progress',
                        function (evt) {
                            if (evt.lengthComputable) {
                                let percentComplete = evt.loaded / evt.total;
                                // percentage是当前下载进度，可自行处理
                                let percentage = percentComplete * 100;
                                console.log(percentage)
                                console.log('111111')
                            }
                        },
                        false
                    );
                    xhr.responseType = 'blob';
                    xhr.onload = () => {
                        if (xhr.status === 200) {
                            resolve(xhr.response);
                        }
                    };
                    xhr.send();
                });
            },
            saveFile(blob, fileName) {
                // ie的下载
                if (window.navigator.msSaveOrOpenBlob) {
                    navigator.msSaveBlob(blob, fileName);
                } else {
                    console.log('222222')
                    // 非ie的下载
                    const link = document.createElement('a');
                    const body = document.querySelector('body');

                    link.href = window.URL.createObjectURL(blob);
                    link.download = fileName;

                    // fix Firefox
                    link.style.display = 'none';
                    body.appendChild(link);

                    link.click();
                    body.removeChild(link);

                    window.URL.revokeObjectURL(link.href);
                    alert('下载完成');
                }
                
                console.log('333333')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>