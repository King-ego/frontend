import React from 'react';

interface HeaderPros {
  title: string;
}
const Header: React.FC<HeaderPros> = ({ title }) => {
  return (
    <>
      <header>{title}</header>
    </>
  );
};
export default Header;
