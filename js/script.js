window.onload = function(){
	// 使图片可以自动取切换 首先获取img标签
	var img1 = document.getElementById('img1');
	// 创建一个数组来保存图片路径
	var imgArr = ["images/1.jpg","images/2.jpg","images/3.jpg"];
	// 创建一个变量，用来保存当前图片的索引 意思就是确定第一张显示图片
	var index = 0;
	// 开始一个定时器 来自动切换图片
	setInterval(function(){
		// 使索引自增
		index++;
		// 判断索引是否超过最大索引
		if (index >= imgArr.length) {
			// 则将index设置为0
			index = 0;
		}
		// 修改img1的属性
		img1.src = imgArr[index];
	},2000);
}