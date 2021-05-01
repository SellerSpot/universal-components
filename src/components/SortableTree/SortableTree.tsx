// import React from 'react';
// import { ReactElement } from 'react';
// import styles from './SortableTree.module.scss';
// import { ISortableTreeProps } from './SortableTree.types';
// import ReactSortableTree, { TreeItem } from 'react-sortable-tree';
// import 'react-sortable-tree/style.css';

// export { ISortableTreeProps } from './SortableTree.types';

// export const SortableTree = (props: ISortableTreeProps): ReactElement => {
//     const treeData: TreeItem[] = [
//         { title: 'Chicken', subtitle: 'Sample Subtitle', children: [{ title: 'Egg' }] },
//         { title: 'Fish', children: [{ title: 'fingerline' }] },
//     ];
//     return (
//         <div style={{ height: 400 }}>
//             <ReactSortableTree
//                 treeData={treeData}
//                 onChange={(treeData) => {
//                     console.log(treeData);
//                 }}
//             />
//         </div>
//     );
// };
