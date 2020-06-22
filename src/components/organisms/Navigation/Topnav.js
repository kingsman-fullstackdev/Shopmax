/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import logoImg from 'assets/images/logo.png';
import logoWhiteImg from 'assets/images/logo-white.png';
import searchIcon from 'assets/icons/search.svg';
import heartIcon from 'assets/icons/small-heart.svg';
import cartIcon from 'assets/icons/cart.svg';
import hamburgerMenuIcon from 'assets/icons/bars.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const TopnavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 65px;
  z-index: ${({ theme }) => theme.zIndex.level5};
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 -1px #ddd inset;
  transition: 0.3s ease-in-out;
  padding: 0 5px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mq.xxs} {
    padding: 0 20px;
  }
  ${({ theme }) => theme.mq.lg} {
    padding: 0 60px;
    height: 85px;
  }
  ${({ transparent }) =>
    transparent &&
    css`
      & {
        background-color: transparent;
        box-shadow: 0 -1px rgba(255, 255, 255, 0.25) inset;
      }
      & ${LinkItem} {
        color: ${({ theme }) => theme.white};
        &:after {
          border-color: ${({ theme }) => theme.white};
        }
        &.active:after {
          transform: scaleX(0);
        }
      }
      & ${Logo} {
        background-image: url(${logoWhiteImg});
      }
      & ${ButtonIcon} {
        filter: invert(0);
      }
      & ${Option}:hover {
        background-color: ${({ theme }) => theme.white100T};
      }
      & ${CartBadge} {
        background-color: ${({ theme }) => theme.white};
        color: ${({ theme }) => theme.dark};
      }
    `};
`;

const LinkItemsWrapper = styled.div`
  flex: 3;
  display: flex;
`;

const LinkItem = styled(NavLink)`
  display: none;
  margin: 0 15px;
  position: relative;
  padding: 33px 0;
  width: 85px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.subFont};
  letter-spacing: 1px;
  transition: 0.3s ease-in-out;
  color: ${({ theme }) => theme.dark};
  text-decoration: none;
  ${({ theme }) => theme.mq.lg} {
    display: block;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 5px solid ${({ theme }) => theme.blue};
    transform: scaleX(0);
    transform-origin: 0% 50%;
    transition: transform 250ms ease-in-out;
  }
  &:hover:after,
  &.active:hover:after,
  &.active:after {
    transform: scaleX(1);
  }
`;

const Logo = styled(NavLink)`
  display: block;
  width: 150px;
  height: 100%;
  background: url(${logoImg}) no-repeat center;
  background-size: 100%;
  ${({ theme }) => theme.mq.lg} {
    width: 190px;
  }
`;

const OptionsWrapper = styled(LinkItemsWrapper)`
  justify-content: flex-end;
`;

const Option = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  margin: 0 8px;
  position: relative;
  padding: 10px;
  border-radius: 50%;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.white100};
  }
  ${({ theme }) => theme.mq.lg} {
    display: ${({ menu }) => (menu ? 'none' : 'flex')};
  }
`;

const CartBadge = styled.span`
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  line-height: 21px;
  top: -3px;
  right: -7px;
  border-radius: 50%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  transition: 0.3s ease-in-out;
  font-weight: ${({ theme }) => theme.medium};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

const Topnav = ({ isTransparent, openSidenav }) => (
  <TopnavWrapper transparent={isTransparent}>
    <LinkItemsWrapper>
      <Option menu visible>
        <ButtonIcon icon={hamburgerMenuIcon} onClick={openSidenav} />
      </Option>
      <LinkItem activeclass="active" to="/">
        Home
      </LinkItem>
      <LinkItem activeclass="active" to="/catalog">
        Catalog
      </LinkItem>
    </LinkItemsWrapper>
    <Logo to="/" />
    <OptionsWrapper>
      <Option>
        <ButtonIcon icon={searchIcon} />
      </Option>
      <Option>
        <ButtonIcon icon={heartIcon} />
      </Option>
      <Option visible>
        <ButtonIcon icon={cartIcon} />
        <CartBadge>0</CartBadge>
      </Option>
    </OptionsWrapper>
  </TopnavWrapper>
);

Topnav.propTypes = {
  openSidenav: PropTypes.func.isRequired,
  isTransparent: PropTypes.bool.isRequired,
};

export default Topnav;