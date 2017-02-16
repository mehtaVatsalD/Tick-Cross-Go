var cnt=0,flag=[0,0,0,0,0,0,0,0,0],narmad=0;

function change1(no)
{	
	if(narmad==0)
	{
	if(flag[no-1]==0)
	{
		switch(no)
		{
			case 1:
			if(cnt%2==0)
			{
				document.getElementById('1').src="img/tick.png";
				flag[no-1]=1;
				cnt++;
				ckeck();
			}
			else
			{
				document.getElementById('1').src="img/cross.png";
				flag[no-1]=2;
				cnt++;
				ckeck();
			}
			break;
			case 2:
			if(cnt%2==0)
			{
				document.getElementById('2').src="img/tick.png";
				flag[no-1]=1;
				cnt++;
				ckeck();
			}
			else
			{
				document.getElementById('2').src="img/cross.png";
				flag[no-1]=2;
				cnt++;
				ckeck();
			}
			break;
			case 3:
			if(cnt%2==0)
			{
				document.getElementById('3').src="img/tick.png";
				flag[no-1]=1;
				cnt++;
				ckeck();
			}
			else
			{
				document.getElementById('3').src="img/cross.png";
				flag[no-1]=2;
				cnt++;
				ckeck();
			}
			break;
			case 4:
			if(cnt%2==0)
			{
				document.getElementById('4').src="img/tick.png";
				flag[no-1]=1;
				cnt++;
				ckeck();
			}
			else
			{
				document.getElementById('4').src="img/cross.png";
				flag[no-1]=2;
				cnt++;
				ckeck();
			}
			break;
			case 5:
			if(cnt%2==0)
			{
				document.getElementById('5').src="img/tick.png";
				flag[no-1]=1;
				cnt++;
				ckeck();
			}
			else
			{
				document.getElementById('5').src="img/cross.png";
				flag[no-1]=2;
				cnt++;
				ckeck();
			}
			break;
			case 6:
			if(cnt%2==0)
			{
				document.getElementById('6').src="img/tick.png";
				flag[no-1]=1;
				cnt++;
				ckeck();
			}
			else
			{
				document.getElementById('6').src="img/cross.png";
				flag[no-1]=2;
				cnt++;
				ckeck();
			}
			break;
			case 7:
			if(cnt%2==0)
			{
				document.getElementById('7').src="img/tick.png";
				flag[no-1]=1;
				cnt++;
				ckeck();
			}
			else
			{
				document.getElementById('7').src="img/cross.png";
				flag[no-1]=2;
				cnt++;
				ckeck();
			}
			break;
			case 8:
			if(cnt%2==0)
			{
				document.getElementById('8').src="img/tick.png";
				flag[no-1]=1;
				cnt++;
				ckeck();
			}
			else
			{
				document.getElementById('8').src="img/cross.png";
				flag[no-1]=2;
				cnt++;
				ckeck();
			}
			break;
			case 9:
			if(cnt%2==0)
			{
				document.getElementById('9').src="img/tick.png";
				flag[no-1]=1;
				cnt++;
				ckeck();
			}
			else
			{
				document.getElementById('9').src="img/cross.png";
				flag[no-1]=2;
				cnt++;
				ckeck();
			}
			break;
		}
	}
	else
	{
		alert("Invalid...!");
	}
	}
	else{
		alert("refresh your browser to start new game...");
	}
	if(cnt==9 && narmad==0)
	{
		narmad=1;
		document.getElementById("result").innerHTML="Draw";
	}
}


function ckeck()
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
		narmad=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Cross Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="Tick Wins";
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
		narmad=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Cross Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="Tick Wins";
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
		narmad=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Cross Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="Tick Wins";
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
		narmad=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Cross Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="Tick Wins";
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
		narmad=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Cross Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="Tick Wins";
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
		narmad=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Cross Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="Tick Wins";
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
		narmad=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Cross Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="Tick Wins";
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
		narmad=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Cross Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="Tick Wins";
			return;
		}
	}
}

