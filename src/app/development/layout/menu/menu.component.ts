import { Component } from '@angular/core';
import { NbIconLibraries, NbMenuItem, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(
    private iconHero : NbIconLibraries
  ){
    this.iconHero.registerFontPack('font-awesome', { packClass: 'fa', iconClassPrefix: 'fa' });
    this.iconHero.setDefaultPack('font-awesome');
  }
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'font-awesome:hero',
      link: '/development/home'
    },
    {
      title: 'Components Nebular',
      expanded: true,
      children: [
        {
          title: 'Input',
          link: '/development/form-input'
        }
      ]
    },
    {
      title: 'Components Flowbite',
      expanded: true,
      children: [
        {
          title: 'Accordion',
          link: '/accordion'
        },
        {
          title: 'Carousel',
          link: '/carousel'
        },
        {
          title: 'Modal',
          link: '/modal'
        },
        {
          title: 'Collapse',
          link: '/collapse'
        },
        {
          title: 'Speed Dial',
          link: '/speed-dial'
        },
        {
          title: 'Dismiss',
          link: '/dismiss'
        },
        {
          title: 'Drawer',
          link: '/drawer'
        },
        {
          title: 'Dropdown',
          link: '/dropdown'
        },
        {
          title: 'Popover',
          link: '/popover'
        },
        {
          title: 'Tabs',
          link: '/tabs'
        },
        {
          title: 'Tooltip',
          link: '/tooltip'
        },
      ],
    },
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
          link : '/auth/change-password'
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Shopping Bag',
      children: [
        {
          title: 'First Product',
        },
        {
          title: 'Second Product',
        },
        {
          title: 'Third Product',
        },
      ],
    },
    {
      title: 'Orders',
      children: [
        {
          title: 'First Order',
        },
        {
          title: 'Second Order',
        },
        {
          title: 'Third Order',
        },
      ],
    },
  ];
}
