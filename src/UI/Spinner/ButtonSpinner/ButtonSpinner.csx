.lds-dual-ring {
  display: inline-block;
  width: 10px;
  height: 10px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 14px;
  height: 14px;
  margin: 2px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
