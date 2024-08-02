'use client';

import { siteConfig } from '~/config/site';

import clsx from 'clsx';
import { useMenu } from 'providers/menu';

import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/images/logo.png';
import styles from './styles.module.scss';

const Logo = () => {
  const { isOpen, toggle } = useMenu();

  return (
    <Link
      className={clsx('logo_wrapper', styles.logo_wrapper)}
      onClick={isOpen ? toggle : undefined}
      href="/"
      style={{
        width: '2.2rem',
        height: '2.2rem',
      }}
    >
      <Image
        className="logo"
        src={logo}
        alt={siteConfig.name}
        loading="lazy"
        layout="fill"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nAFEALv/AAAAAADJyckztra2RgAAAAIAxMTEP+Li4vb9/f3/xsbGgwDDw8OK6+vr/83Nze2YmJiDAFxcXBtqampdQEBAGwAAAACyHSHCm4RaSAAAAABJRU5ErkJggg=="
      />
    </Link>
  );
};
export default Logo;
