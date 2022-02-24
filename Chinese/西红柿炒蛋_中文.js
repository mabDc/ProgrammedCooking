// 作者: Antecer
// 翻译: 西红柿
// 描述: 西红柿炒蛋

var 〇 = 0,
	一 = 1,
	二 = 2,
	三 = 3,
	四 = 4,
	五 = 5,
	六 = 6,
	七 = 7,
	八 = 8,
	九 = 9,
	十 = 10,
	百 = 100,
	千 = 1000,
	厘 = 0.1,
	分 = 0.01,
	毫 = 0.001,
	是 = true,
	否 = false,
	空 = null;

// 准备
var 厨师 = { 数量: 一 };
var 食客 = { 数量: 一 };
var 鸡蛋 = { 名称: "鸡蛋", 数量: 食客.数量 };
var 西红柿 = { 重量: 百, 数量: 鸡蛋.数量 };
var 葱 = { 数量: 鸡蛋.数量 };
var 盐 = { 重量: 四 * 鸡蛋.数量 };
var 糖 = { 重量: 四 * 鸡蛋.数量 };
var 酱油 = { 体积: 三 * 鸡蛋.数量 };
var 味精 = { 重量: 一 * 鸡蛋.数量 };
var 白醋 = { 体积: 一 * 鸡蛋.数量 };
var 花生油 = { 体积: 八 * 鸡蛋.数量 };

// kitchen utensils
var 容器 = { 名称: "碗", 最小容积: 五 * 十 * 鸡蛋.数量 + 百 };
var 锅 = { 名称: "炒锅", 最小容积: (五 * 十 * 鸡蛋.数量 + 八 * 厘 * 西红柿.重量 * 西红柿.数量) * 三, 最小直径: 280, };
var 厨具 = { 名称: "锅铲", 数量: 1 };
var 工作台 = { 名称: "砧板", 数量: 1 };
var 刀具 = { 名称: "厨刀", 数量: 1 };
var 搅拌工具 = { 名称: "筷子", 数量: 1 };
var 盘子 = { 数量: 1 };

// 数量down tool
function 等待(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

Array.prototype.增加 = Array.prototype.push;
Array.prototype.合并 = Array.prototype.concat;

// cooking process
(async () => {
	西红柿.描述 = `用清水洗净后放进${工作台.名称}并使用${刀具.名称}切丁`;
	西红柿.体积 = 八 * 厘 * 西红柿.重量 * 西红柿.数量;
	容器.描述 = `把 ${鸡蛋.名称} 的 内容物 放进 ${容器.名称}, 然后使用 ${搅拌工具.名称} 搅拌`;
	容器.内容物 = [鸡蛋.内容物];
	锅.内容物 = [花生油];
	锅.温度 = 百 + 六 * 十;
	锅.内容物.增加(容器.内容物);
	锅.内容物状态 = "液体";
	while (锅.内容物状态 != "半固化") await 等待(千);
	锅.属性 = { 工具: 锅铲, 搅拌: 是 };
	while (锅.内容物状态 != "凝固") await 等待(千);
	锅.属性.搅拌 = 否;
	锅.内容物.合并([西红柿, 盐, 糖, 酱油, 白醋]);
	锅.属性.搅拌 = 是;
	await 等待(三 * 千 * 六 * 十);
	while (西红柿.状态 != "熔化") await 等待(千);
	锅.属性.搅拌 = 否;
	锅.温度 = 百;
	锅.内容物.增加(味精);
	锅.属性.搅拌 = 是;
	await 等待(十 * 千);
	锅.属性.搅拌 = 否;
	锅.温度 = 空;
	碟子.内容物 = 锅.内容物;
	葱.描述 = `用清水洗净后使用${刀具.名称}切段`;
	碟子.内容物.增加(葱);
})();

// Tips:
// 1. Be careful when using the kitchen knife, do not cut your fingers!
// 2. When using an open flame to heat a wok, you need to pay attention to safety so as not to burn down the house!
