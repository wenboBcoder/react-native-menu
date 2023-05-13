import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES=[
    new Category('c1','Italian','#f5428d'),
    new Category('c2','Quick & Easy','#f54242'),
    new Category('c3','Humburgers','#f5a44a'),
    new Category('c4','German','#f5d142'),
    new Category('c5','Light & Lovely','#368dff'),
    new Category('c6','Exotic','#41d95d'),
    new Category('c7','Breakfast','#9eecff'),
    new Category('c8','Asian','#b9ffb0'),
    new Category('c9','French','#ffc7ff'),
    new Category('c10','Summer','#47fced'),
]
export const Meals=[
    new Meal(
        'c1',
        ['c1','c5','c10'],
        '1Asparagous Salad with Cherry Tomatoes',
        'luxurious',
        'simple',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0a100c6c-c8ed-4e78-b3fd-52b3c1e6440f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686148833&t=31d8eed0bf0a4634229c8362cc4b9a47',
        30,
        [
            'White and Green Aspargous',
            '30g Pine Nuts',
            '300g Cherry Tomatoes',
            'Salad',
            'Salt, Pepper and Olive Oil'
        ],
        [
            'Wash, peel and cut the asparagus',
            'Cook in salted water',
            'Salt and pepper the asparagous',
            'Roast the pine nuts',
            'Halkve the tomatoes',
            'Mix with  asparagus salad and dressing',
            'Serve with Baguette'
        ],
        true,
        true,
        true,
        true
    ),
    new Meal(
        'c2',
        ['c2','c3','c10'],
        '2Asparagous Salad with Cherry Tomatoes',
        'luxurious',
        'simple',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0a100c6c-c8ed-4e78-b3fd-52b3c1e6440f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686148833&t=31d8eed0bf0a4634229c8362cc4b9a47',
        30,
        [
            'White and Green Aspargous',
            '30g Pine Nuts',
            '300g Cherry Tomatoes',
            'Salad',
            'Salt, Pepper and Olive Oil'
        ],
        [
            'Wash, peel and cut the asparagus',
            'Cook in salted water',
            'Salt and pepper the asparagous',
            'Roast the pine nuts',
            'Halkve the tomatoes',
            'Mix with  asparagus salad and dressing',
            'Serve with Baguette'
        ],
        true,
        true,
        true,
        true
    ),
    new Meal(
        'c3',
        ['c2','c3','c10'],
        '3Asparagous Salad with Cherry Tomatoes',
        'luxurious',
        'simple',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0a100c6c-c8ed-4e78-b3fd-52b3c1e6440f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686148833&t=31d8eed0bf0a4634229c8362cc4b9a47',
        30,
        [
            'White and Green Aspargous',
            '30g Pine Nuts',
            '300g Cherry Tomatoes',
            'Salad',
            'Salt, Pepper and Olive Oil'
        ],
        [
            'Wash, peel and cut the asparagus',
            'Cook in salted water',
            'Salt and pepper the asparagous',
            'Roast the pine nuts',
            'Halkve the tomatoes',
            'Mix with  asparagus salad and dressing',
            'Serve with Baguette'
        ],
        true,
        true,
        true,
        true
    ),
    new Meal(
        'c4',
        ['c4','c5','c10'],
        '4Asparagous Salad with Cherry Tomatoes',
        'luxurious',
        'simple',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0a100c6c-c8ed-4e78-b3fd-52b3c1e6440f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686148833&t=31d8eed0bf0a4634229c8362cc4b9a47',
        30,
        [
            'White and Green Aspargous',
            '30g Pine Nuts',
            '300g Cherry Tomatoes',
            'Salad',
            'Salt, Pepper and Olive Oil'
        ],
        [
            'Wash, peel and cut the asparagus',
            'Cook in salted water',
            'Salt and pepper the asparagous',
            'Roast the pine nuts',
            'Halkve the tomatoes',
            'Mix with  asparagus salad and dressing',
            'Serve with Baguette'
        ],
        true,
        true,
        true,
        true
    ),
    new Meal(
        'c5',
        ['c2','c5','c10'],
        '5Asparagous Salad with Cherry Tomatoes',
        'luxurious',
        'simple',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0a100c6c-c8ed-4e78-b3fd-52b3c1e6440f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686148833&t=31d8eed0bf0a4634229c8362cc4b9a47',
        30,
        [
            'White and Green Aspargous',
            '30g Pine Nuts',
            '300g Cherry Tomatoes',
            'Salad',
            'Salt, Pepper and Olive Oil'
        ],
        [
            'Wash, peel and cut the asparagus',
            'Cook in salted water',
            'Salt and pepper the asparagous',
            'Roast the pine nuts',
            'Halkve the tomatoes',
            'Mix with  asparagus salad and dressing',
            'Serve with Baguette'
        ],
        true,
        true,
        true,
        true
    ),
    new Meal(
        'c6',
        ['c2','c5','c6'],
        '6Asparagous Salad with Cherry Tomatoes',
        'luxurious',
        'simple',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0a100c6c-c8ed-4e78-b3fd-52b3c1e6440f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686148833&t=31d8eed0bf0a4634229c8362cc4b9a47',
        30,
        [
            'White and Green Aspargous',
            '30g Pine Nuts',
            '300g Cherry Tomatoes',
            'Salad',
            'Salt, Pepper and Olive Oil'
        ],
        [
            'Wash, peel and cut the asparagus',
            'Cook in salted water',
            'Salt and pepper the asparagous',
            'Roast the pine nuts',
            'Halkve the tomatoes',
            'Mix with  asparagus salad and dressing',
            'Serve with Baguette'
        ],
        true,
        true,
        true,
        true
    ),
    new Meal(
        'c7',
        ['c1','c5','c7'],
        '7Asparagous Salad with Cherry Tomatoes',
        'luxurious',
        'simple',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0a100c6c-c8ed-4e78-b3fd-52b3c1e6440f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686148833&t=31d8eed0bf0a4634229c8362cc4b9a47',
        30,
        [
            'White and Green Aspargous',
            '30g Pine Nuts',
            '300g Cherry Tomatoes',
            'Salad',
            'Salt, Pepper and Olive Oil'
        ],
        [
            'Wash, peel and cut the asparagus',
            'Cook in salted water',
            'Salt and pepper the asparagous',
            'Roast the pine nuts',
            'Halkve the tomatoes',
            'Mix with  asparagus salad and dressing',
            'Serve with Baguette'
        ],
        true,
        true,
        true,
        true
    ),
    new Meal(
        'c8',
        ['c2','c3','c8'],
        '8Asparagous Salad with Cherry Tomatoes',
        'luxurious',
        'simple',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0a100c6c-c8ed-4e78-b3fd-52b3c1e6440f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686148833&t=31d8eed0bf0a4634229c8362cc4b9a47',
        30,
        [
            'White and Green Aspargous',
            '30g Pine Nuts',
            '300g Cherry Tomatoes',
            'Salad',
            'Salt, Pepper and Olive Oil'
        ],
        [
            'Wash, peel and cut the asparagus',
            'Cook in salted water',
            'Salt and pepper the asparagous',
            'Roast the pine nuts',
            'Halkve the tomatoes',
            'Mix with  asparagus salad and dressing',
            'Serve with Baguette'
        ],
        true,
        true,
        true,
        true
    ),
    new Meal(
        'c9',
        ['c2','c5','c9'],
        '9Asparagous Salad with Cherry Tomatoes',
        'luxurious',
        'simple',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0a100c6c-c8ed-4e78-b3fd-52b3c1e6440f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686148833&t=31d8eed0bf0a4634229c8362cc4b9a47',
        30,
        [
            'White and Green Aspargous',
            '30g Pine Nuts',
            '300g Cherry Tomatoes',
            'Salad',
            'Salt, Pepper and Olive Oil'
        ],
        [
            'Wash, peel and cut the asparagus',
            'Cook in salted water',
            'Salt and pepper the asparagous',
            'Roast the pine nuts',
            'Halkve the tomatoes',
            'Mix with  asparagus salad and dressing',
            'Serve with Baguette'
        ],
        true,
        true,
        true,
        true
    ),
    new Meal(
        'c10',
        ['c2','c5','c10'],
        '10Asparagous Salad with Cherry Tomatoes',
        'luxurious',
        'simple',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0a100c6c-c8ed-4e78-b3fd-52b3c1e6440f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686148833&t=31d8eed0bf0a4634229c8362cc4b9a47',
        30,
        [
            'White and Green Aspargous',
            '30g Pine Nuts',
            '300g Cherry Tomatoes',
            'Salad',
            'Salt, Pepper and Olive Oil'
        ],
        [
            'Wash, peel and cut the asparagus',
            'Cook in salted water',
            'Salt and pepper the asparagous',
            'Roast the pine nuts',
            'Halkve the tomatoes',
            'Mix with  asparagus salad and dressing',
            'Serve with Baguette'
        ],
        true,
        true,
        true,
        true
    ),
    new Meal(
        'c10',
        ['c2','c5','c10'],
        '11Asparagous Salad with Cherry Tomatoes',
        'luxurious',
        'simple',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0a100c6c-c8ed-4e78-b3fd-52b3c1e6440f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686148833&t=31d8eed0bf0a4634229c8362cc4b9a47',
        30,
        [
            'White and Green Aspargous',
            '30g Pine Nuts',
            '300g Cherry Tomatoes',
            'Salad',
            'Salt, Pepper and Olive Oil'
        ],
        [
            'Wash, peel and cut the asparagus',
            'Cook in salted water',
            'Salt and pepper the asparagous',
            'Roast the pine nuts',
            'Halkve the tomatoes',
            'Mix with  asparagus salad and dressing',
            'Serve with Baguette'
        ],
        true,
        true,
        true,
        true
    )
]