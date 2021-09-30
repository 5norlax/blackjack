import options from './enums'

/*
    2  3  4  5  6  7  8  9  10  11
  2
  3
  4
  5
  6
  7
  8
  9
  10
  11
  12
  13
  14
  15
  16
  17
  18
  19
  20
*/
export const basicStrategyValues = [ 
    [   options.HIT,    options.HIT,    options.HIT,    options.HIT,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.HIT,    options.HIT,    options.HIT,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.HIT,    options.HIT,    options.HIT,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.HIT,    options.HIT,    options.HIT,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.HIT,    options.HIT,    options.HIT,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.HIT,    options.HIT,    options.HIT,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.HIT,    options.HIT,    options.HIT,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.DOUBLE, options.DOUBLE, options.DOUBLE, options.DOUBLE,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.DOUBLE, options.DOUBLE, options.DOUBLE, options.DOUBLE, options.DOUBLE,    options.DOUBLE,    options.DOUBLE,    options.DOUBLE,    options.HIT,       options.HIT    ],
    [   options.DOUBLE, options.DOUBLE, options.DOUBLE, options.DOUBLE, options.DOUBLE,    options.DOUBLE,    options.DOUBLE,    options.DOUBLE,    options.DOUBLE,    options.DOUBLE ],
    [   options.HIT,    options.HIT,    options.STAND,  options.STAND,  options.STAND,     options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.STAND,  options.STAND,  options.STAND,  options.STAND,  options.STAND,     options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.STAND,  options.STAND,  options.STAND,  options.STAND,  options.STAND,     options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.STAND,  options.STAND,  options.STAND,  options.STAND,  options.STAND,     options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.STAND,  options.STAND,  options.STAND,  options.STAND,  options.STAND,     options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.STAND,  options.STAND,  options.STAND,  options.STAND,  options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND  ],
    [   options.STAND,  options.STAND,  options.STAND,  options.STAND,  options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND  ],
    [   options.STAND,  options.STAND,  options.STAND,  options.STAND,  options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND  ],
    [   options.STAND,  options.STAND,  options.STAND,  options.STAND,  options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND  ],
];
/*
    2  3  4  5  6  7  8  9  10  11
  2
  3
  4
  5
  6
  7
  8
  9
  10
  11
*/
export const basicStrategyPairs = [ 
    [   options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,     options.SPLIT,     options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,     options.SPLIT,     options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.HIT,    options.HIT,    options.SPLIT,  options.SPLIT,     options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.DOUBLE, options.DOUBLE, options.DOUBLE, options.DOUBLE, options.DOUBLE,    options.DOUBLE,    options.DOUBLE,    options.DOUBLE,    options.HIT,       options.HIT    ],
    [   options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,     options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,     options.SPLIT,     options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,     options.SPLIT,     options.SPLIT,     options.SPLIT,     options.SPLIT,     options.SPLIT  ],
    [   options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,     options.STAND,     options.SPLIT,     options.SPLIT,     options.STAND,     options.STAND  ],
    [   options.STAND,  options.STAND,  options.STAND,  options.STAND,  options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND  ],
    [   options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,  options.SPLIT,     options.SPLIT,     options.SPLIT,     options.SPLIT,     options.SPLIT,     options.SPLIT  ],
];
/*
    2  3  4  5  6  7  8  9  10  11
  2
  3
  4
  5
  6
  7
  8
  9
*/
export const basicStrategyAces = [ 
    [   options.HIT,    options.HIT,    options.HIT,    options.DOUBLE, options.DOUBLE,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.HIT,    options.HIT,    options.DOUBLE, options.DOUBLE,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.HIT,    options.DOUBLE, options.DOUBLE, options.DOUBLE,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.HIT,    options.DOUBLE, options.DOUBLE, options.DOUBLE,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.HIT,    options.DOUBLE, options.DOUBLE, options.DOUBLE, options.DOUBLE,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
    [   options.STAND,  options.DOUBLE, options.DOUBLE, options.DOUBLE, options.DOUBLE,    options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND  ],
    [   options.STAND,  options.STAND,  options.STAND,  options.STAND,  options.DOUBLE,    options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND  ],
    [   options.STAND,  options.STAND,  options.STAND,  options.STAND,  options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND,     options.STAND  ],
    [   options.HIT,    options.HIT,    options.HIT,    options.HIT,    options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT,       options.HIT    ],
]