// import React, { ReactElement, useState } from 'react';
// import ReactSortableTree from 'react-sortable-tree';
// import 'react-sortable-tree/style.css';
// import { ISortableTreeProps } from './SortableTree.types';

// export { ISortableTreeProps } from './SortableTree.types';

// export const SortableTree = (props: ISortableTreeProps): ReactElement => {
//     const { treeData, onChangeTreeData } = props;
//     const [selectedNodeId, setSelectedNodeId] = useState('');

//     // const nodeClicked = (event: any, node: TreeNode) => {
//     //     if (
//     //         event.target.className.includes('collapseButton') ||
//     //         event.target.className.includes('expandButton')
//     //     ) {
//     //         console.log('Clicked');
//     //     } else {
//     //         console.log(node, 'node data');
//     //         setSelectedNodeId(node.);
//     //     }
//     // };

//     return (
//         <ReactSortableTree
//             treeData={treeData}
//             onChange={onChangeTreeData}
//             // generateNodeProps={(data) => {
//             //     const { node } = data;
//             //     const nodeProps = {
//             //         onClick: (event: unknown) => {
//             //             console.log(typeof event);
//             //             nodeClicked(event, node);
//             //         },
//             //         className: '',
//             //     };
//             //     if (selectedNodeId === node.id) {
//             //         console.log(nodeProps);
//             //         nodeProps.className = 'selected-tree-node';
//             //         console.log(nodeProps.className);
//             //     }
//             //     return nodeProps;
//             // }}
//         />
//     );
// };
