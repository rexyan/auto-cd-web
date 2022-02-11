import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
	href: '/'
})`
	position: absolute;
	height: 56px;
	top: 0;
	left: 0;
	width:100px;
	display: block;
	background: url(${ logoPic });
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	padding-right: 70px;
	box-sizing: border-box;
	height: 100%;
	margin: 0 auto;
`;

export const NavItem = styled.div`
	color: #333;
	font-size: 17px;
	line-height: 56px;
	padding: 0 15px;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	margin-top: 9px;
	padding: 0 20px;
	box-sizing: border-box;
	font-size; 14px;
	margin-left: 20px;
	&::placeholder{
		color: #999;
	} 
`;


export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`

export const Button = styled.div`
	float: right;
	line-height: 38px;
	margin-top: 9px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	margin-right: 20px;
	padding: 0 20px;
	font-size: 14px;
	&.reg{
		color: #ec6149;
	}
	&.writting{
		color: #fff;
		background: #ec6149;
	}
`
export const Searchinfo = styled.div`
	position: absolute;
	left: 35%;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`

export const SearchInfoTitle = styled.div`
	margin-top:20px;
	margin-bottom:15px;
	line-height:20px;
	font-size:14px;
	color: #969696;
`

export const SearchInfoSwitch = styled.span`
	font-size:13px;
	float: right;
`

export const SearchInfoItem = styled.a`
	font-size:12px;
	padding: 0 5px;
	line-height: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
	display: block;
	float: left;
	margin-right: 10px;
	margin-bottom 15px;
`

export const SearchInfoList = styled.div`
	overflow: hidden;
`