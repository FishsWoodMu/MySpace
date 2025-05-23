// 原始数据 (扁平结构)
const rawData = [
  { id: 1, name: '总公司', parentId: null },
  { id: 2, name: '技术部', parentId: 1 },
  { id: 3, name: '前端组', parentId: 2 },
  { id: 4, name: '后端组', parentId: 2 },
  { id: 5, name: '市场部', parentId: 1 }
];

function convertToElementTree(rawData) {
  // 1. 创建映射
  const nodeMap = new Map();
  rawData.forEach(item => {
    nodeMap.set(item.id, {
      ...item,
      children: []
    });
  });

  console.log('rowdata', rawData);
  

  // 2. 建立父子关系
  rawData.forEach(item => {
    if (item.parentId !== null) {
      const parent = nodeMap.get(item.parentId);
      parent?.children.push(nodeMap.get(item.id));
    }
  });

  // 3. 提取根节点
  const roots = rawData
    .filter(item => item.parentId === null)
    .map(item => nodeMap.get(item.id));

    console.log('roots',roots);
    

  // 4. 格式转换
  const convertFormat = (nodes) => 
    nodes.map(node => ({
      label: node.name,
      id: node.id,
      ...(node.children.length > 0 && { 
        children: convertFormat(node.children) 
      })
    }));

  return convertFormat(roots);
}

// 使用示例
const treeData = convertToElementTree(rawData);
console.log(JSON.stringify(treeData, null, 2));