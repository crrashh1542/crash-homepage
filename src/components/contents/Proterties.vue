<script>
export default {
    name: "BodyProterties"
}
</script>

<template>
    <div class="c-proterty mdui-row">
        <div class="c-proterty-unit mdui-col-xs-12 mdui-col-md-5">
            <span>技术</span>
            <span class="mdui-progress">
                <span class="mdui-progress-determinate" style="width: 30%;"></span>
            </span>
        </div>
        <div class="c-proterty-unit mdui-col-xs-12 mdui-col-md-5">
            <span>智商</span>
            <span class="mdui-progress">
                <span class="mdui-progress-determinate" style="width: 30%;"></span>
            </span>
        </div>
        <div class="c-proterty-unit mdui-col-xs-12 mdui-col-md-5">
            <span>社恐</span>
            <span class="mdui-progress">
                <span class="mdui-progress-determinate" style="width: 30%;"></span>
            </span>
        </div>
        <div class="c-proterty-unit mdui-col-xs-12 mdui-col-md-5">
            <span>态度</span>
            <span class="mdui-progress">
                <span class="mdui-progress-determinate" style="width: 30%;"></span>
            </span>
        </div>
    </div>
</template>

<style scoped lang="less">
    .c-proterty {
        .c-proterty-unit {
            margin: 4px 5px 4px 20px;
        }
    }
    @media screen and (max-width: 600px) {
        .c-proterty {
            .c-proterty-unit {
                margin: 4px;
            }
        }
    }
</style>