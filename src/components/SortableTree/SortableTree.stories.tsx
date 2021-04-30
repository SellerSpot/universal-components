// import { Meta, Story } from '@storybook/react/types-6-0';
// import React, { useState } from 'react';
// import { SortableTree as SortableTreeComponent, ISortableTreeProps } from './SortableTree';

// const initialTreeData: ISortableTreeProps['treeData'] = [
//     {
//         title: 'Chicken',
//         subtitle: 'Sample Subtitle',
//         children: [{ title: 'Egg' }],
//     },
//     { title: 'Fish', children: [{ title: 'fingerline' }] },
// ];

// const Template: Story<ISortableTreeProps> = () => {
//     const [treeData, setTreeData] = useState<ISortableTreeProps['treeData']>(initialTreeData);
//     return (
//         <div
//             style={{
//                 height: '400px',
//             }}
//         >
//             <SortableTreeComponent
//                 treeData={treeData}
//                 onChangeTreeData={(newTreeData) => setTreeData(newTreeData)}
//             />
//         </div>
//     );
// };

// export const SortableTree = Template.bind({});

// export default {
//     title: 'Components/Atoms',
//     component: SortableTreeComponent,
// } as Meta;
