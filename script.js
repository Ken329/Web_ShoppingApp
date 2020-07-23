var item_name = new Array();
var item_price = new Array();
var item_offer = new Array();
var item;
var ammount = 0;
var quantity = 0;
var insert = 0;
var balance = 0;
item += "<tr><th>Name</th><th>Price</th><th>Offer</th></tr>";
document.getElementById("shop-title").addEventListener("click", main);
document.getElementById("main").addEventListener("click", main);
document.getElementById("flash").addEventListener("click", flash);
document.getElementById("today").addEventListener("click", today);
document.getElementById("mycart").addEventListener("click", mycart);
document.getElementById("icon-main").addEventListener("click", main);
document.getElementById("icon-flash").addEventListener("click", flash);
document.getElementById("icon-today").addEventListener("click", today);
document.getElementById("icon-mycart").addEventListener("click", mycart);

function main(){
	document.getElementById("today-page").style.display = 'none';
	document.getElementById("flash-page").style.display = 'none';
	document.getElementById("cart").style.display = 'none';
	document.getElementById("payment").style.display = 'none';
	document.getElementById("main-page").style.display = 'block';
}
function flash(){
	document.getElementById("main-page").style.display = 'none';
	document.getElementById("today-page").style.display = 'none';
	document.getElementById("cart").style.display = 'none';
	document.getElementById("payment").style.display = 'none';
	document.getElementById("flash-page").style.display = 'block';
}
function today(){
	document.getElementById("main-page").style.display = 'none';
	document.getElementById("cart").style.display = 'none';
	document.getElementById("flash-page").style.display = 'none';
	document.getElementById("payment").style.display = 'none';
	document.getElementById("today-page").style.display = 'block';
}
function mycart(){
	document.getElementById("main-page").style.display = 'none';
	document.getElementById("today-page").style.display = 'none';
	document.getElementById("flash-page").style.display = 'none';
	document.getElementById("payment").style.display = 'none';
	document.getElementById("cart").style.display = 'block';
}
document.getElementById("continue").addEventListener("click", function(){
	document.getElementById("today-page").style.display = 'none';
	document.getElementById("flash-page").style.display = 'none';
	document.getElementById("cart").style.display = 'none';
	document.getElementById("payment").style.display = 'none';
	document.getElementById("main-page").style.display = 'block';
});
document.getElementById("proceed").addEventListener("click", function(){
	document.getElementById("today-page").style.display = 'none';
	document.getElementById("flash-page").style.display = 'none';
	document.getElementById("cart").style.display = 'none';
	document.getElementById("main-page").style.display = 'none';
	document.getElementById("payment").style.display = 'block';
	document.getElementById("item").innerHTML = quantity;
	document.getElementById("ammount").innerHTML = "$"+ammount;
});
document.getElementById("insert-btn").addEventListener("click", function(){
	insert = parseInt(document.getElementById("insert").value);
	if(insert == ""){
		alert("Please input your ammount!!!");
	}else{
		ammount -= insert;
	}
	if(ammount == 0){
		document.getElementById("ammount").innerHTML = "$"+ammount;
		document.getElementById("insert-btn").style.display = 'none';
		document.getElementById("great").style.display = 'block';
		return false;
	}else if(ammount < 0){
		ammount = Math.abs(ammount);
		document.getElementById("myammount").style.display = 'none';
		document.getElementById("balance").style.display = 'block';
		document.getElementById("mybalance").innerHTML = "Your change $" + ammount;
		document.getElementById("insert-btn").style.display = 'none';
		document.getElementById("great").style.display = 'block';
	}else{
		document.getElementById("ammount").innerHTML = "Remaining $"+ammount;
	}
});
function result(name, price, offer){
	item += "<tr><td>" + name + "</td><td>" + price + "</td><td>" + offer + "</td></tr>";

	return document.getElementById("table").innerHTML = item;
}
function check(my_id){
	quantity++;
	document.getElementById("quan").innerHTML = quantity;
	var id = my_id;
	if (id == "f1") {
		result("Mask", "$110", "70%");
		ammount += 110;
	}else if(id == "f2"){
		result("Bluetooth Speaker" , "$200", "80%");
		ammount += 200;
	}else if(id == "f3"){
		result("Phone Casing", "$10", "40%");
		ammount += 10;
	}else if(id == "f4"){
		result("Spectacles", "$50", "70%");
		ammount += 50;
	}else if(id == "f5"){
		result("Earbuds", "$500", "30%");
		ammount += 500;
	}else if(id == "f6"){
		result("Cleanser", "$30", "90%");
		ammount += 30;
	}else if(id == "f7"){
		result("Mouse", "$19.90", "50%");
		ammount += 19.90;
	}else if(id == "t1"){
		result("Subway", "$5", "90%");
		ammount += 5;
	}else if(id == "t2"){
		result("Thermometer", "$100", "30%");
		ammount += 100;
	}else if(id == "t3"){
		result("Bluetooth Earphone", "$200", "40%");
		ammount += 200;
	}else if(id == "t4"){
		result("Window 10", "$12", "90%");
		ammount += 12;
	}else if(id == "t5"){
		result("Lipstick", "$19.90", "50%");
		ammount += 19.90;
	}
}



