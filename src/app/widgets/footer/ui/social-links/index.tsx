'use client';

import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import { links as items } from '~/content/footer';
import styles from './styles.module.scss';

export const SocialLinks = () => {
  return (
    <ul className={clsx('list-reset', styles.list)}>
      {React.Children.toArray(
        items.map(({ name, href }) => (
          <li className={styles.item} key={name}>
            <Link className={clsx('link', styles.link)} href={href} target="_blank">
              <GoArrowUpRight size={19} />
              {name}
            </Link>
          </li>
        )),
      )}
    </ul>
  );
};
