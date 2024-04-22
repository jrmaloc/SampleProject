import React, { ReactNode } from 'react';

interface FooterItemsProps {
  children: ReactNode;
}

function FlexColumn({ children }: FooterItemsProps) {
  return <div className="flex flex-col items-start gap-8 w-[193px]">{children}</div>;
}

export default FlexColumn;
