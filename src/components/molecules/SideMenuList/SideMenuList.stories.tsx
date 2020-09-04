import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SideMenuList, SideMenuListProps } from './SideMenuList';

export default {
    title: 'molecules/SideMenuList',
    component: SideMenuList,
} as Meta;

const Template: Story<SideMenuListProps> = (args) => <SideMenuList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    setShowMenu: () => {},
    showMenu: true,
};
