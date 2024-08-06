const treeData = [
    {
        label: 'Item 1',
        children: [
            {
                label: 'Sub Item 1.1',
                children: [
                    { label: 'Sub Sub Item 1.1.1' },
                    { label: 'Sub Sub Item 1.1.2' },
                    { label: 'Sub Sub Item 1.1.3' }
                ]
            },
            {
                label: 'Sub Item 1.2',
                children: [
                    { label: 'Sub Sub Item 1.2.1' },
                    { label: 'Sub Sub Item 1.2.2' }
                ]
            },
            { label: 'Sub Item 1.3' }
        ]
    },
    {
        label: 'Item 2',
        children: [
            { label: 'Sub Item 2.1' },
            {
                label: 'Sub Item 2.2',
                children: [
                    { label: 'Sub Sub Item 2.2.1' },
                    {
                        label: 'Sub Sub Item 2.2.2',
                        children: [
                            { label: 'Sub Sub Sub Item 2.2.2.1' },
                            { label: 'Sub Sub Sub Item 2.2.2.2' }
                        ]
                    }
                ]
            },
            { label: 'Sub Item 2.3' }
        ]
    },
    {
        label: 'Item 3',
        children: [
            { label: 'Sub Item 3.1' },
            {
                label: 'Sub Item 3.2',
                children: [
                    { label: 'Sub Sub Item 3.2.1' },
                    { label: 'Sub Sub Item 3.2.2' }
                ]
            },
            { label: 'Sub Item 3.3' }
        ]
    }
];

export default treeData;