import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  AllCheckedKeys = ['0-2-1', '0-1-3', '0-4-0', '0-4-1'];
  FireCheckedKeys = ['0-1-3'];
  MonitorCheckedKeys = ['0-3-4'];
  HydrantCheckedKeys = ['0-3-1'];
  // BlockCheckedKeys = ['0-2-1', '0-1-3', '0-4-0', '0-4-1'];
  GuardCheckedKeys = ['0-0-0'];
  // defaultSelectedKeys = ['0-0-0'];

  // AllExpandedKeys = ['0-2-1', '0-1-3', '0-4-0', '0-4-1'];
  AllExpandedKeys = [];
  FireExpandedKeys = ['0-1'];
  MonitorExpandedKeys = ['0-3'];
  HydrantExpandedKeys = ['0-3'];
  GuardExpandedKeys = ['0-0'];

  nodes = [
    {
      title: '房屋',
      key: '0-0',
      children: [
        {
          title: '入口，门卫房',
          key: '0-0-0',
          isLeaf: true,
        },
        {
          title: '居民楼',
          key: '0-0-1',
          isLeaf: true
        },
        {
          title: '车库',
          key: '0-0-2',
          isLeaf: true
        },
        {
          title: '配电房',
          key: '0-0-3',
          isLeaf: true
        },
        {
          title: '会所',
          key: '0-0-4',
          isLeaf: true
        },
        {
          title: '便利店',
          key: '0-0-5',
          isLeaf: true
        },
        {
          title: '物业管理办公室',
          key: '0-0-6',
          isLeaf: true
        },
        {
          title: '居委会办公室',
          key: '0-0-7',
          isLeaf: true
        },
        {
          title: '派出所',
          key: '0-0-8',
          isLeaf: true
        }
      ]
    },
    {
      title: '道路',
      key: '0-1',
      expanded: true,
      children: [
        { title: '小区入口所在道路', key: '0-1-0', isLeaf: true },
        { title: '主干道', key: '0-1-1', isLeaf: true },
        { title: '支路', key: '0-1-2', isLeaf: true },
        { title: '消防通道', key: '0-1-3', isLeaf: true }
      ]
    },
    {
      title: '景观',
      key: '0-2',
      expanded: true,
      children: [
        { title: '街道绿化带', key: '0-2-1', isLeaf: true },
        { title: '小区景观区', key: '0-2-2', isLeaf: true },
      ]
    },
    {
      title: '安全设施',
      key: '0-3',
      children: [
        { title: '消防栓', key: '0-3-1', isLeaf: true },
        { title: '灭火器', key: '0-3-2', isLeaf: true },
        { title: '防汛器材', key: '0-3-3', isLeaf: true },
        {
          title: '防盗设施', key: '0-3-4',
          children: [
            {
              title: '小区电网',
              key: '0-3-4-0',
              isLeaf: true
            },
            {
              title: '底层院落电网',
              key: '0-3-4-1',
              isLeaf: true
            },
            {
              title: '防盗窗',
              key: '0-3-4-2',
              isLeaf: true
            },
            {
              title: '警报器',
              key: '0-3-4-3',
              isLeaf: true
            },
          ]
        },
        { title: '高空防坠落设施', key: '0-3-5', isLeaf: true },
      ]
    },
    {
      title: '生活设施',
      key: '0-4',
      expanded: true,
      children: [
        { title: '5G基站', key: '0-4-0', isLeaf: true },
        { title: '垃圾站', key: '0-4-1', isLeaf: true },
        { title: '健身器材', key: '0-4-2', isLeaf: true },
        { title: '宠物活动区', key: '0-4-3', isLeaf: true },
        { title: '自行车临时存放区', key: '0-4-4', isLeaf: true },
      ]
    }
  ];
  // checkOptionsOne = [
  //   { label: 'Apple', value: 'Apple', checked: true },
  //   { label: 'Pear', value: 'Pear' },
  //   { label: 'Orange', value: 'Orange' }
  // ]; 
  // checkOptionsTwo = [
  //   { label: 'Apple', value: 'Apple' },
  //   { label: 'Pear', value: 'Pear', checked: true },
  //   { label: 'Orange', value: 'Orange' }
  // ];
  // checkOptionsThree = [
  //   { label: 'Apple', value: 'Apple', disabled: true, checked: true },
  //   { label: 'Pear', value: 'Pear', disabled: true },
  //   { label: 'Orange', value: 'Orange' }
  // ];
  // checkOptionsFour = [
  //   { label: 'Apple', value: 'Apple' },
  //   { label: 'Pear', value: 'Pear', checked: true },
  //   { label: 'Orange', value: 'Orange' }
  // ];
  // checkOptionsFive = [
  //   { label: 'Apple', value: 'Apple', disabled: true, checked: true },
  //   { label: 'Pear', value: 'Pear', disabled: true },
  //   { label: 'Orange', value: 'Orange' }
  // ];
  constructor() { }

  ngOnInit() {
  }

}
