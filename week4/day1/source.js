<span> This is some Inline Text.</span>
<div></div>

div{
  background-image: url("block.png");
  background-size: contain;
  width: 400px;
  height: 400px;
}
span{
  // width: 100px;
  // height: 100px;
}

//------------------------->
.boat{
  width: 200px;
  height: 200px;

  background-image: url("boat.png");
  background-size: contain;
}
.left{
  float: left;
}
.right{
  float:right;
}
.block{
  display: inline-block;
}
.clear{
  clear: left;
}
<div class="boat left"></div>

<div class="boat left"></div>
<div class="boat right"></div>

<div class="block boat"></div>
<div class="boat right"></div>

