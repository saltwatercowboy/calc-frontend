export const treemapData = {
    type: 'treemap',
    data: {
        datasets: [
        {
            tree: [
            { value: 15, label: 'Category 1' },
            { value: 6, label: 'Category 2' },
            { value: 6, label: 'Category 3' },
            { value: 5, label: 'Category 4' },
            { value: 4, label: 'Category 5' },
            { value: 3, label: 'Category 6' },
            { value: 2, label: 'Category 7' },
            { value: 2, label: 'Category 8' }
            ],
            label: 'My treemap dataset',
            borderColor: 'green',
            borderWidth: 1,
            spacing: 0,
            backgroundColor: 'green'
        }
        ],
    },
    options: {
        plugins: {
        legend: {
            display: true,
            position: 'center'
        }
        },
        tooltips: {
        mode: 'point'
        },
        responsive: true
        // Other options you might want to add
    }
};

export default treemapData;