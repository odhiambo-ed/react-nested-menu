const treeData = [
    {
        label: 'This PC',
        children: [
            {
                label: 'Documents',
                children: [
                    { label: 'Reports' },
                    { label: 'Projects' },
                    { label: 'Resumes' }
                ]
            },
            {
                label: 'Desktop',
                children: [
                    { label: 'Screenshots' },
                    { label: 'Work Files' }
                ]
            },
            { label: 'Downloads' }
        ]
    },
    {
        label: 'Music',
        children: [
            { label: 'Albums' },
            {
                label: 'Playlists',
                children: [
                    { label: 'Rock' },
                    {
                        label: 'Jazz',
                        children: [
                            { label: 'Smooth Jazz' },
                            { label: 'Classic Jazz' }
                        ]
                    }
                ]
            },
            { label: 'Podcasts' }
        ]
    },
    {
        label: 'Pictures',
        children: [
            { label: 'Vacation' },
            {
                label: 'Events',
                children: [
                    { label: 'Birthday' },
                    { label: 'Wedding' }
                ]
            },
            { label: 'Family' }
        ]
    }
];

export default treeData;