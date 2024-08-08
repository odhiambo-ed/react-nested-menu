const TreeData = [
    {
        label: 'This PC',
        children: [
            {
                label: 'Documents',
                children: [
                    { label: 'Reports' },
                    { label: 'Projects' },
                    { label: 'Resumes' },
                    { label: 'Invoices' },
                    { label: 'Letters' }
                ]
            },
            {
                label: 'Desktop',
                children: [
                    { label: 'Screenshots' },
                    { label: 'Work Files' },
                    { label: 'Shortcuts' }
                ]
            },
            { label: 'Downloads' },
            { label: 'Pictures' },
            { label: 'Videos' }
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
                            { label: 'Classic Jazz' },
                            { label: 'Modern Jazz' }
                        ]
                    },
                    { label: 'Pop' },
                    { label: 'Classical' }
                ]
            },
            { label: 'Podcasts' },
            { label: 'Singles' }
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
                    { label: 'Wedding' },
                    { label: 'Anniversary' }
                ]
            },
            { label: 'Family' },
            { label: 'Friends' },
            { label: 'Pets' }
        ]
    },
    {
        label: 'Videos',
        children: [
            { label: 'Movies' },
            { label: 'TV Shows' },
            { label: 'Clips' },
            {
                label: 'Tutorials',
                children: [
                    { label: 'Programming' },
                    { label: 'Cooking' },
                    { label: 'DIY' }
                ]
            }
        ]
    },
    {
        label: 'Work',
        children: [
            { label: 'Projects' },
            { label: 'Meetings' },
            { label: 'Reports' },
            { label: 'Presentations' }
        ]
    }
];

export default TreeData;