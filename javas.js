var cnt1=0,cnt2=0,win=0,flag=[0,0,0,0,0,0,0,0,0],player1="",player2="",p1r=0,p2r=0,dr=0;

function change(no){
	if(win==0)
	{
		if(flag[no-1]==0)
		{
			if((cnt1%2==0 && cnt2%2==0) || (cnt1%2!=0 && cnt2%2!=0))
			{
				document.getElementById(no).src="img/tick.png";
				flag[no-1]=1;
				check();
				cnt1++;
			}
			else if((cnt1%2!=0 && cnt2%2==0) || (cnt1%2==0 && cnt2%2!=0))
			{
				document.getElementById(no).src="img/cross.png";
				flag[no-1]=2;
				check();
				cnt1++;
			}
			if(cnt1==9 && win==0)
			{
				document.getElementById('result').innerHTML="Draw";
				win=1;
				dr++;
				document.getElementById('dr').innerHTML=dr;
			}
			if(win==0)
			info();
			else
				document.getElementById('info').innerHTML="Start New Game.."
			}
			else{
				alert("Invalid...!");
			}
	}
	else
	{
		alert("Start new game...");
	}
}

function check()
{
	var n=1,ch=0;
	for(i=1;n<3;i++)
	{
		if(flag[i-1]==flag[i] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		win=1;
		if((cnt1%2==0 && cnt2%2==0) || (cnt1%2!=0 && cnt2%2!=0))
		{
			document.getElementById("result").innerHTML=player1+" Wins";
			p1r++;
			document.getElementById('p1r').innerHTML=p1r;
			return;
		}
		else
		{
			document.getElementById("result").innerHTML=player2+" Wins";
			p2r++;
			document.getElementById('p2r').innerHTML=p2r;
			return;
		}
	}

	n=1;
	ch=0;
	for(i=4;n<3;i++)
	{
		if(flag[i-1]==flag[i] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		win=1;
		if((cnt1%2==0 && cnt2%2==0) || (cnt1%2!=0 && cnt2%2!=0))
		{
			document.getElementById("result").innerHTML=player1+" Wins";
			p1r++;
			document.getElementById('p1r').innerHTML=p1r;
			return;
		}
		else
		{
			document.getElementById("result").innerHTML=player2+" Wins";
			p2r++;
			document.getElementById('p2r').innerHTML=p2r;
			return;
		}
	}

	n=1;
	ch=0;
	for(i=7;n<3;i++)
	{
		if(flag[i-1]==flag[i] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		win=1;
		if((cnt1%2==0 && cnt2%2==0) || (cnt1%2!=0 && cnt2%2!=0))
		{
			document.getElementById("result").innerHTML=player1+" Wins";
			p1r++;
			document.getElementById('p1r').innerHTML=p1r;
			return;
		}
		else
		{
			document.getElementById("result").innerHTML=player2+" Wins";
			p2r++;
			document.getElementById('p2r').innerHTML=p2r;
			return;
		}
	}

	n=1;
	ch=0;
	for(i=1;n<3;i+=3)
	{
		if(flag[i-1]==flag[i+2] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		win=1;
		if((cnt1%2==0 && cnt2%2==0) || (cnt1%2!=0 && cnt2%2!=0))
		{
			document.getElementById("result").innerHTML=player1+" Wins";
			p1r++;
			document.getElementById('p1r').innerHTML=p1r;
			return;
		}
		else
		{
			document.getElementById("result").innerHTML=player2+" Wins";
			p2r++;
			document.getElementById('p2r').innerHTML=p2r;
			return;
		}
	}

	n=1;
	ch=0;
	for(i=2;n<3;i+=3)
	{
		if(flag[i-1]==flag[i+2] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		win=1;
		if((cnt1%2==0 && cnt2%2==0) || (cnt1%2!=0 && cnt2%2!=0))
		{
			document.getElementById("result").innerHTML=player1+" Wins";
			p1r++;
			document.getElementById('p1r').innerHTML=p1r;
			return;
		}
		else
		{
			document.getElementById("result").innerHTML=player2+" Wins";
			p2r++;
			document.getElementById('p2r').innerHTML=p2r;
			return;
		}
	}

	n=1;
	ch=0;
	for(i=3;n<3;i+=3)
	{
		if(flag[i-1]==flag[i+2] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		win=1;
		if((cnt1%2==0 && cnt2%2==0) || (cnt1%2!=0 && cnt2%2!=0))
		{
			document.getElementById("result").innerHTML=player1+" Wins";
			p1r++;
			document.getElementById('p1r').innerHTML=p1r;
			return;
		}
		else
		{
			document.getElementById("result").innerHTML=player2+" Wins";
			p2r++;
			document.getElementById('p2r').innerHTML=p2r;
			return;
		}
	}

	n=1;
	ch=0;
	for(i=1;n<3;i+=4)
	{
		if(flag[i-1]==flag[i+3] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		win=1;
		if((cnt1%2==0 && cnt2%2==0) || (cnt1%2!=0 && cnt2%2!=0))
		{
			document.getElementById("result").innerHTML=player1+" Wins";
			p1r++;
			document.getElementById('p1r').innerHTML=p1r;
			return;
		}
		else
		{
			document.getElementById("result").innerHTML=player2+" Wins";
			p2r++;
			document.getElementById('p2r').innerHTML=p2r;
			return;
		}
	}

	n=1;
	ch=0;
	for(i=3;n<3;i+=2)
	{
		if(flag[i-1]==flag[i+1] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		win=1;
		if((cnt1%2==0 && cnt2%2==0) || (cnt1%2!=0 && cnt2%2!=0))
		{
			document.getElementById("result").innerHTML=player1+" Wins";
			p1r++;
			document.getElementById('p1r').innerHTML=p1r;
			return;
		}
		else
		{
			document.getElementById("result").innerHTML=player2+" Wins";
			p2r++;
			document.getElementById('p2r').innerHTML=p2r;
			return;
		}
	}
}

function welcome(){
	while(player1=="")
	{
		player1=prompt("Enter Name of Player1:");
	}
	while(player2=="")
	{
		player2=prompt("Enter Name of Player2:");
	}
	document.getElementById('player1').innerHTML=player1;
	document.getElementById('player2').innerHTML=player2;
	alert("Welcome "+player1+" and "+player2+" to Tick Cross and Go");
	alert("Tick is for "+player1+" and Cross is for "+player2);
	info();
}

function info(){
	if((cnt1%2==0 && cnt2%2==0) || (cnt1%2!=0 && cnt2%2!=0))
	{
		document.getElementById('info').innerHTML=player1+"'s Turn...";
	}
	else
	{
		document.getElementById('info').innerHTML=player2+"'s Turn...";
	}
}

function newgame(){
	win=0;
	cnt1=0;
	cnt2++;
	flag=[0,0,0,0,0,0,0,0,0]
	document.getElementById('1').src="img/blank.jpg";
	document.getElementById('2').src="img/blank.jpg";
	document.getElementById('3').src="img/blank.jpg";
	document.getElementById('4').src="img/blank.jpg";
	document.getElementById('5').src="img/blank.jpg";
	document.getElementById('6').src="img/blank.jpg";
	document.getElementById('7').src="img/blank.jpg";
	document.getElementById('8').src="img/blank.jpg";
	document.getElementById('9').src="img/blank.jpg";
	document.getElementById('result').innerHTML="ALL THE BEST";
	info();
}