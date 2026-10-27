window.ML = {
  "meta": {
    "name": "ML VII",
    "author": "Halitim Amin",
    "semester": 7,
    "coefficient": 4,
    "unit": "UEF2",
    "playlist": "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF",
    "channel": "https://www.youtube.com/@statquest",
    "date": "2026-10-26",
    "videoCount": 106,
    "totalSeconds": 107435,
    "totalTime": "29 h 51 min",
    "average": "17 min"
  },
  "chapters": [
    {
      "id": 1,
      "slug": "introduction",
      "coverage": "covered",
      "en": {
        "title": "Introduction and Fundamentals",
        "short": "Introduction",
        "standfirst": "What learning means, its four kinds, and the model underneath.",
        "coverageNote": "The map, the evaluation vocabulary and the Bayesian groundwork are here.",
        "diagram": {
          "title": "The learning loop",
          "intro": "Every model in the course runs this loop, from a line to a forest.",
          "points": [
            "The model makes a guess from the data it has.",
            "The loss measures the distance between the guess and the truth.",
            "The update moves the parameters, then the loop starts again."
          ]
        }
      },
      "ar": {
        "title": "مقدمة وأساسيات",
        "short": "المقدمة",
        "standfirst": "ما معنى التعلّم، وأنواعه الأربعة، والنموذج الذي يقف في الأساس.",
        "coverageNote": "الخريطة ومفردات التقييم وأساس بايز موجودة هنا.",
        "diagram": {
          "title": "حلقة التعلّم",
          "intro": "كل نموذج في المقرر يدور في هذه الحلقة، من الخط إلى الغابة.",
          "points": [
            "يقدّم النموذج تخمينًا انطلاقًا من البيانات التي لديه.",
            "تقيس الخسارة المسافة بين التخمين والحقيقة.",
            "يحرّك التحديث المعاملات، ثم تبدأ الحلقة من جديد."
          ]
        }
      },
      "lessons": [
        {
          "id": "1.1",
          "en": {
            "title": "Introduction to Machine Learning",
            "bullets": [
              "Overview of machine learning",
              "Types: supervised, unsupervised, semi-supervised, reinforcement, self-learning",
              "Applications of machine learning"
            ],
            "practical": "Set up the development environment and implement simple linear regression."
          },
          "ar": {
            "title": "مقدمة في تعلّم الآلة",
            "bullets": [
              "نظرة عامة على تعلّم الآلة",
              "الأنواع: الموجّه، غير الموجّه، شبه الموجّه، المعزّز، الذاتي",
              "تطبيقات تعلّم الآلة"
            ],
            "practical": "تهيئة بيئة التطوير وتنفيذ الانحدار الخطي البسيط."
          },
          "groups": [
            {
              "en": "Start here",
              "ar": "ابدأ من هنا",
              "videos": [
                {
                  "n": 1,
                  "star": true
                },
                {
                  "n": 2,
                  "star": true
                },
                {
                  "n": 6,
                  "star": true
                },
                {
                  "n": 3,
                  "star": false
                },
                {
                  "n": 4,
                  "star": false
                },
                {
                  "n": 10,
                  "star": true
                }
              ]
            }
          ]
        },
        {
          "id": "1.2",
          "en": {
            "title": "Probability and Statistics Refresher",
            "bullets": [
              "Probability theory basics",
              "Random variables and distributions",
              "Bayesian thinking"
            ],
            "practical": "No separate practical; the probability returns in every model."
          },
          "ar": {
            "title": "مراجعة في الاحتمالات والإحصاء",
            "bullets": [
              "أساسيات نظرية الاحتمالات",
              "المتغيرات العشوائية والتوزيعات",
              "التفكير البايزي"
            ],
            "practical": "لا عملًا عمليًا مستقلًا؛ تعود الاحتمالات في كل نموذج."
          },
          "groups": [
            {
              "en": "Probability and Bayes",
              "ar": "الاحتمال وبايز",
              "videos": [
                {
                  "n": 14,
                  "star": true
                },
                {
                  "n": 15,
                  "star": false
                },
                {
                  "n": 44,
                  "star": true
                },
                {
                  "n": 45,
                  "star": false
                },
                {
                  "n": 7,
                  "star": false
                },
                {
                  "n": 8,
                  "star": false
                }
              ]
            }
          ]
        }
      ],
      "videoCount": 12,
      "seconds": 9431,
      "time": "2 h 37 min",
      "videoNumbers": [
        1,
        2,
        3,
        4,
        6,
        7,
        8,
        10,
        14,
        15,
        44,
        45
      ]
    },
    {
      "id": 2,
      "slug": "supervised",
      "coverage": "covered",
      "en": {
        "title": "Supervised Learning",
        "short": "Supervised",
        "standfirst": "The models that do the work: lines, trees, forests, boosting, margins.",
        "coverageNote": "Almost everything is here, except LightGBM and stacking.",
        "diagram": {
          "title": "The bias-variance trade-off",
          "intro": "The one curve that explains why a better fit can be a worse model.",
          "points": [
            "Left: the model is too simple, so it misses the pattern.",
            "Right: it memorises the noise, so it fails on new data.",
            "The middle is the work: enough flexibility, not more."
          ]
        }
      },
      "ar": {
        "title": "التعلّم الموجّه",
        "short": "الموجّه",
        "standfirst": "النماذج التي تقوم بالعمل: الخطوط، والأشجار، والغابات، والتعزيز، والهوامش.",
        "coverageNote": "كل شيء تقريبًا موجود، باستثناء LightGBM والتكديس.",
        "diagram": {
          "title": "مقايضة التحيّز والتباين",
          "intro": "المنحنى الواحد الذي يفسّر لماذا قد يكون التلاؤم الأفضل نموذجًا أسوأ.",
          "points": [
            "يسارًا: النموذج بسيط جدًا، فيفوّت النمط.",
            "يمينًا: يحفظ الضوضاء، فيفشل على بيانات جديدة.",
            "الوسط هو العمل: مرونة كافية، دون زيادة."
          ]
        }
      },
      "lessons": [
        {
          "id": "2.1",
          "en": {
            "title": "Linear Models and Regularization",
            "bullets": [
              "Linear regression",
              "Logistic regression",
              "Regularization: Ridge (L2), Lasso (L1), Elastic Net",
              "Advanced: polynomial regression, interaction terms"
            ],
            "practical": "Implement and compare linear and logistic regression with regularization."
          },
          "ar": {
            "title": "النماذج الخطية والتنظيم",
            "bullets": [
              "الانحدار الخطي",
              "الانحدار اللوجستي",
              "التنظيم: ريدج (L2)، لاسو (L1)، إيلاستيك نت",
              "متقدم: الانحدار متعدد الحدود وحدود التفاعل"
            ],
            "practical": "تنفيذ ومقارنة الانحدار الخطي واللوجستي مع التنظيم."
          },
          "groups": [
            {
              "en": "Linear regression",
              "ar": "الانحدار الخطي",
              "videos": [
                {
                  "n": 9,
                  "star": true
                },
                {
                  "n": 10,
                  "star": true
                },
                {
                  "n": 11,
                  "star": false
                },
                {
                  "n": 13,
                  "star": true
                },
                {
                  "n": 12,
                  "star": false
                }
              ]
            },
            {
              "en": "Logistic regression",
              "ar": "الانحدار اللوجستي",
              "videos": [
                {
                  "n": 16,
                  "star": true
                },
                {
                  "n": 17,
                  "star": true
                },
                {
                  "n": 18,
                  "star": false
                },
                {
                  "n": 19,
                  "star": false
                },
                {
                  "n": 20,
                  "star": false
                },
                {
                  "n": 22,
                  "star": false
                },
                {
                  "n": 23,
                  "star": true
                },
                {
                  "n": 21,
                  "star": false
                }
              ]
            },
            {
              "en": "Regularization",
              "ar": "التنظيم",
              "videos": [
                {
                  "n": 25,
                  "star": true
                },
                {
                  "n": 26,
                  "star": true
                },
                {
                  "n": 27,
                  "star": true
                },
                {
                  "n": 28,
                  "star": true
                },
                {
                  "n": 29,
                  "star": false
                }
              ]
            }
          ]
        },
        {
          "id": "2.2",
          "en": {
            "title": "Decision Trees and Ensemble Methods",
            "bullets": [
              "Decision trees",
              "Bagging: random forests",
              "Boosting: GBM, AdaBoost, XGBoost, LightGBM, CatBoost",
              "Stacking and blending"
            ],
            "practical": "Implement and analyse decision trees and ensemble methods."
          },
          "ar": {
            "title": "أشجار القرار وطرق التجميع",
            "bullets": [
              "أشجار القرار",
              "باغينغ: الغابات العشوائية",
              "التعزيز: GBM، AdaBoost، XGBoost، LightGBM، CatBoost",
              "التكديس والدمج"
            ],
            "practical": "تنفيذ وتحليل أشجار القرار وطرق التجميع."
          },
          "groups": [
            {
              "en": "Decision trees",
              "ar": "أشجار القرار",
              "videos": [
                {
                  "n": 46,
                  "star": true
                },
                {
                  "n": 48,
                  "star": true
                },
                {
                  "n": 49,
                  "star": true
                },
                {
                  "n": 47,
                  "star": false
                },
                {
                  "n": 51,
                  "star": false
                }
              ]
            },
            {
              "en": "Random forests",
              "ar": "الغابات العشوائية",
              "videos": [
                {
                  "n": 52,
                  "star": true
                },
                {
                  "n": 53,
                  "star": false
                },
                {
                  "n": 54,
                  "star": false
                }
              ]
            },
            {
              "en": "Boosting",
              "ar": "التعزيز",
              "videos": [
                {
                  "n": 58,
                  "star": true
                },
                {
                  "n": 59,
                  "star": true
                },
                {
                  "n": 60,
                  "star": true
                },
                {
                  "n": 61,
                  "star": true
                },
                {
                  "n": 62,
                  "star": false
                },
                {
                  "n": 64,
                  "star": true
                },
                {
                  "n": 65,
                  "star": false
                },
                {
                  "n": 66,
                  "star": false
                },
                {
                  "n": 67,
                  "star": false
                },
                {
                  "n": 68,
                  "star": false
                },
                {
                  "n": 69,
                  "star": true
                },
                {
                  "n": 70,
                  "star": false
                }
              ]
            }
          ]
        },
        {
          "id": "2.3",
          "en": {
            "title": "Support Vector Machines and Optimization",
            "bullets": [
              "Introduction to support vector machines",
              "Kernel trick: linear, polynomial, RBF, sigmoid",
              "Optimization: SGD, Adam, RMSprop"
            ],
            "practical": "Implement an SVM and experiment with kernels and optimizers."
          },
          "ar": {
            "title": "آلات المتجهات الداعمة والتحسين",
            "bullets": [
              "مقدمة في آلات المتجهات الداعمة",
              "حيلة النواة: خطية، متعددة الحدود، RBF، سيجمويد",
              "التحسين: النزول التدرجي العشوائي، Adam، RMSprop"
            ],
            "practical": "تنفيذ SVM وتجربة النوى والمحسّنات."
          },
          "groups": [
            {
              "en": "Support vector machines",
              "ar": "آلات المتجهات الداعمة",
              "videos": [
                {
                  "n": 72,
                  "star": true
                },
                {
                  "n": 73,
                  "star": true
                },
                {
                  "n": 74,
                  "star": true
                },
                {
                  "n": 75,
                  "star": false
                },
                {
                  "n": 71,
                  "star": false
                }
              ]
            },
            {
              "en": "Optimization",
              "ar": "التحسين",
              "videos": [
                {
                  "n": 56,
                  "star": true
                },
                {
                  "n": 57,
                  "star": true
                },
                {
                  "n": 55,
                  "star": false
                },
                {
                  "n": 98,
                  "star": false
                }
              ]
            }
          ]
        }
      ],
      "videoCount": 47,
      "seconds": 53006,
      "time": "14 h 43 min",
      "videoNumbers": [
        9,
        10,
        11,
        12,
        13,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        25,
        26,
        27,
        28,
        29,
        46,
        47,
        48,
        49,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        98
      ]
    },
    {
      "id": 3,
      "slug": "unsupervised",
      "coverage": "partial",
      "en": {
        "title": "Unsupervised Learning",
        "short": "Unsupervised",
        "standfirst": "Structure without labels: clusters, fewer axes, and the distances between points.",
        "coverageNote": "The algorithms are here; most of the evaluation metrics are not.",
        "diagram": {
          "title": "K-means in three panels",
          "intro": "One pass of the algorithm, drawn instead of described.",
          "points": [
            "Pick k centres. Give every point to its nearest centre.",
            "Move each centre to the mean of its points.",
            "Repeat until nothing moves. The answer depends on k and the start."
          ]
        }
      },
      "ar": {
        "title": "التعلّم غير الموجّه",
        "short": "غير الموجّه",
        "standfirst": "بنية بلا وسوم: عناقيد، ومحاور أقل، والمسافات بين النقاط.",
        "coverageNote": "الخوارزميات موجودة، لكن معظم مقاييس التقييم غير موجودة.",
        "diagram": {
          "title": "K-means في ثلاث لوحات",
          "intro": "دورة واحدة من الخوارزمية، مرسومة بدلًا من وصفها.",
          "points": [
            "اختر k مراكز. أعطِ كل نقطة أقرب مركز إليها.",
            "حرّك كل مركز إلى متوسط نقاطه.",
            "أعد حتى لا يتحرك شيء. تعتمد النتيجة على k ونقطة البداية."
          ]
        }
      },
      "lessons": [
        {
          "id": "3.1",
          "en": {
            "title": "Clustering",
            "bullets": [
              "K-means clustering",
              "Hierarchical clustering (agglomerative, divisive)",
              "DBSCAN and OPTICS",
              "Metrics: silhouette, Davies-Bouldin, adjusted Rand index, mutual information"
            ],
            "practical": "Apply clustering algorithms to a dataset and analyse the results."
          },
          "ar": {
            "title": "التجميع",
            "bullets": [
              "تجميع K-means",
              "التجميع الهرمي (التجميعي، التقسيمي)",
              "DBSCAN وOPTICS",
              "المقاييس: Silhouette، Davies-Bouldin، مؤشر Rand المعدل، المعلومات المتبادلة"
            ],
            "practical": "تطبيق خوارزميات التجميع على مجموعة بيانات وتحليل النتائج."
          },
          "groups": [
            {
              "en": "Three algorithms",
              "ar": "ثلاث خوارزميات",
              "videos": [
                {
                  "n": 41,
                  "star": true
                },
                {
                  "n": 40,
                  "star": true
                },
                {
                  "n": 42,
                  "star": true
                },
                {
                  "n": 8,
                  "star": false
                }
              ]
            }
          ]
        },
        {
          "id": "3.2",
          "en": {
            "title": "Dimensionality Reduction",
            "bullets": [
              "Principal component analysis (PCA)",
              "t-SNE",
              "Linear discriminant analysis (LDA)",
              "Independent component analysis (ICA)",
              "Advanced: UMAP, factor analysis"
            ],
            "practical": "Apply dimensionality reduction to high-dimensional data."
          },
          "ar": {
            "title": "تقليل الأبعاد",
            "bullets": [
              "تحليل المكونات الرئيسية (PCA)",
              "t-SNE",
              "تحليل التمييز الخطي (LDA)",
              "تحليل المكونات المستقلة (ICA)",
              "متقدم: UMAP، تحليل العوامل"
            ],
            "practical": "تطبيق تقليل الأبعاد على بيانات عالية الأبعاد."
          },
          "groups": [
            {
              "en": "PCA",
              "ar": "PCA",
              "videos": [
                {
                  "n": 31,
                  "star": true
                },
                {
                  "n": 30,
                  "star": true
                },
                {
                  "n": 32,
                  "star": false
                },
                {
                  "n": 34,
                  "star": false
                },
                {
                  "n": 33,
                  "star": false
                }
              ]
            },
            {
              "en": "LDA, t-SNE and distances",
              "ar": "LDA وt-SNE والمسافات",
              "videos": [
                {
                  "n": 35,
                  "star": true
                },
                {
                  "n": 39,
                  "star": true
                },
                {
                  "n": 37,
                  "star": false
                },
                {
                  "n": 38,
                  "star": false
                }
              ]
            }
          ]
        }
      ],
      "videoCount": 13,
      "seconds": 8733,
      "time": "2 h 26 min",
      "videoNumbers": [
        8,
        30,
        31,
        32,
        33,
        34,
        35,
        37,
        38,
        39,
        40,
        41,
        42
      ]
    },
    {
      "id": 4,
      "slug": "specialized",
      "coverage": "none",
      "en": {
        "title": "Specialized Techniques",
        "short": "Specialized",
        "standfirst": "Two specialist families: probability graphs, and search borrowed from evolution.",
        "coverageNote": "The playlist gives the Bayesian groundwork, not the networks or the genetic algorithms.",
        "diagram": {
          "title": "A Bayesian network",
          "intro": "Three variables, two causes, one graph you can reason with.",
          "points": [
            "An arrow means “influences”, not “causes everything”.",
            "The graph lets you ask for a probability after seeing evidence.",
            "Structure learning is the hard part: the arrows are usually not given."
          ]
        }
      },
      "ar": {
        "title": "تقنيات متخصصة",
        "short": "متخصصة",
        "standfirst": "عائلتان متخصصتان: شبكات احتمالية، وبحث مستعار من التطور.",
        "coverageNote": "تقدّم القائمة أساس بايز، لا الشبكات ولا الخوارزميات الجينية.",
        "diagram": {
          "title": "شبكة بايزية",
          "intro": "ثلاثة متغيرات، سببان، ورسم يمكنك الاستدلال به.",
          "points": [
            "السهم يعني «يؤثر»، لا «يسبب كل شيء».",
            "يتيح الرسم طلب احتمال بعد رؤية دليل.",
            "تعلّم البنية هو الجزء الصعب: الأسهم عادة غير معطاة."
          ]
        }
      },
      "lessons": [
        {
          "id": "4.1",
          "en": {
            "title": "Bayesian Networks and Gaussian Processes",
            "bullets": [
              "Introduction to Bayesian networks",
              "Structure learning and parameter learning",
              "Gaussian processes: regression and classification",
              "Applications and examples"
            ],
            "practical": "Implement a Bayesian network for a given dataset."
          },
          "ar": {
            "title": "الشبكات البايزية والعمليات الغاوسية",
            "bullets": [
              "مقدمة في الشبكات البايزية",
              "تعلّم البنية وتعلّم المعاملات",
              "العمليات الغاوسية: الانحدار والتصنيف",
              "التطبيقات والأمثلة"
            ],
            "practical": "تنفيذ شبكة بايزية لمجموعة بيانات معطاة."
          },
          "groups": [
            {
              "en": "Groundwork only",
              "ar": "الأساس فقط",
              "videos": [
                {
                  "n": 44,
                  "star": true
                },
                {
                  "n": 45,
                  "star": false
                },
                {
                  "n": 16,
                  "star": false
                }
              ]
            }
          ]
        },
        {
          "id": "4.2",
          "en": {
            "title": "Genetic Algorithms and Belief Functions",
            "bullets": [
              "Introduction to genetic algorithms",
              "Fitness, selection, crossover, mutation",
              "Belief functions and Dempster-Shafer theory",
              "Applications in optimization and uncertainty"
            ],
            "practical": "Solve an optimization problem with a genetic algorithm."
          },
          "ar": {
            "title": "الخوارزميات الجينية ودوال الاعتقاد",
            "bullets": [
              "مقدمة في الخوارزميات الجينية",
              "اللياقة، الانتخاب، التزاوج، الطفرة",
              "دوال الاعتقاد ونظرية ديمبستر-شيفر",
              "تطبيقات في التحسين ونمذجة عدم اليقين"
            ],
            "practical": "حل مسألة تحسين بخوارزمية جينية."
          },
          "groups": [
            {
              "en": "One contrast to hold on to",
              "ar": "مقارنة واحدة تُمسك بها",
              "videos": [
                {
                  "n": 56,
                  "star": false
                }
              ]
            }
          ]
        }
      ],
      "videoCount": 4,
      "seconds": 3440,
      "time": "57 min",
      "videoNumbers": [
        16,
        44,
        45,
        56
      ]
    },
    {
      "id": 5,
      "slug": "semi-supervised-and-rl",
      "coverage": "partial",
      "en": {
        "title": "Semi-Supervised and Reinforcement Learning",
        "short": "Semi-supervised, RL",
        "standfirst": "Learning from a little supervision, and learning from reward.",
        "coverageNote": "The RL concepts are covered; semi-supervision and the RL algorithms are not.",
        "diagram": {
          "title": "The agent loop",
          "intro": "Reinforcement learning is a conversation with an environment.",
          "points": [
            "The agent takes an action in a state.",
            "The environment answers with a new state and a reward.",
            "The policy changes so that better rewards become more likely."
          ]
        }
      },
      "ar": {
        "title": "التعلّم شبه الموجّه والتعلّم المعزّز",
        "short": "شبه موجّه، معزّز",
        "standfirst": "التعلّم من إشراف قليل، والتعلّم من المكافأة.",
        "coverageNote": "مفاهيم التعلّم المعزّز موجودة، أما التعلّم شبه الموجّه وخوارزمياته فغير موجودة.",
        "diagram": {
          "title": "حلقة الوكيل",
          "intro": "التعلّم المعزّز حوار مع بيئة.",
          "points": [
            "يتخذ الوكيل فعلًا في حالة ما.",
            "تجيب البيئة بحالة جديدة ومكافأة.",
            "تتغيّر السياسة لتصبح المكافآت الأفضل أكثر احتمالًا."
          ]
        }
      },
      "lessons": [
        {
          "id": "5.1",
          "en": {
            "title": "Semi-Supervised Learning",
            "bullets": [
              "Introduction to semi-supervised learning",
              "Self-training and co-training",
              "Generative models for semi-supervised learning",
              "Semi-supervised SVMs"
            ],
            "practical": "Implement a semi-supervised algorithm on a partially labelled dataset."
          },
          "ar": {
            "title": "التعلّم شبه الموجّه",
            "bullets": [
              "مقدمة في التعلّم شبه الموجّه",
              "التدريب الذاتي والتدريب المشترك",
              "النماذج التوليدية للتعلّم شبه الموجّه",
              "آلات المتجهات الداعمة شبه الموجّهة"
            ],
            "practical": "تنفيذ خوارزمية شبه موجّهة على بيانات موسومة جزئيًا."
          },
          "groups": [
            {
              "en": "Prerequisites",
              "ar": "متطلبات سابقة",
              "videos": [
                {
                  "n": 72,
                  "star": false
                },
                {
                  "n": 45,
                  "star": false
                }
              ]
            }
          ]
        },
        {
          "id": "5.2",
          "en": {
            "title": "Reinforcement Learning",
            "bullets": [
              "Fundamentals of reinforcement learning",
              "Markov decision processes",
              "Q-learning and SARSA",
              "Policy gradient methods",
              "Applications: games and robotics"
            ],
            "practical": "Implement Q-learning for a simple game environment."
          },
          "ar": {
            "title": "التعلّم المعزّز",
            "bullets": [
              "أساسيات التعلّم المعزّز",
              "عمليات قرار ماركوف",
              "Q-Learning وSARSA",
              "طرق تدرج السياسة",
              "تطبيقات: الألعاب والروبوتات"
            ],
            "practical": "تنفيذ Q-Learning لبيئة لعبة بسيطة."
          },
          "groups": [
            {
              "en": "Concepts and deep RL",
              "ar": "المفاهيم والتعلّم العميق",
              "videos": [
                {
                  "n": 103,
                  "star": true
                },
                {
                  "n": 104,
                  "star": false
                },
                {
                  "n": 105,
                  "star": false
                },
                {
                  "n": 106,
                  "star": false
                }
              ]
            }
          ]
        }
      ],
      "videoCount": 6,
      "seconds": 6914,
      "time": "1 h 55 min",
      "videoNumbers": [
        45,
        72,
        103,
        104,
        105,
        106
      ]
    },
    {
      "id": 6,
      "slug": "features-and-anomalies",
      "coverage": "partial",
      "en": {
        "title": "Feature Engineering and Anomaly Detection",
        "short": "Features, anomalies",
        "standfirst": "Clean features first, then the rows that do not belong.",
        "coverageNote": "Encoding and selection are here; RFE and most anomaly algorithms are not.",
        "diagram": {
          "title": "The confusion matrix",
          "intro": "Two ways to be right, two ways to be wrong, and the four numbers behind every metric.",
          "points": [
            "True positives and true negatives are the wins.",
            "False positives and false negatives cost differently in every problem.",
            "Accuracy hides that difference. Precision and recall do not."
          ]
        }
      },
      "ar": {
        "title": "هندسة الخصائص وكشف الشذوذ",
        "short": "الخصائص، الشذوذ",
        "standfirst": "الميزات النظيفة أولًا، ثم الصفوف التي لا تنتمي.",
        "coverageNote": "الترميز والاختيار موجودان، أما RFE ومعظم خوارزميات الشذوذ فغير موجودة.",
        "diagram": {
          "title": "مصفوفة الارتباك",
          "intro": "طريقتان للصواب، وطريقتان للخطأ، وأربعة أرقام وراء كل مقياس.",
          "points": [
            "الإيجابيات والسلبيات الصحيحة هي المكاسب.",
            "تكلفة الإيجابية الكاذبة والسلبية الكاذبة تختلف في كل مسألة.",
            "الدقة الكلية تخفي الفرق، بينما الإحكام والاستدعاء يكشفانه."
          ]
        }
      },
      "lessons": [
        {
          "id": "6.1",
          "en": {
            "title": "Feature Engineering and Preprocessing",
            "bullets": [
              "Data preprocessing",
              "Feature scaling and normalization",
              "Missing values and categorical data",
              "Selection: recursive feature elimination, SelectKBest, L1",
              "Extraction: PCA, LDA, t-SNE"
            ],
            "practical": "Clean and preprocess a real-world dataset."
          },
          "ar": {
            "title": "هندسة الخصائص والمعالجة المسبقة",
            "bullets": [
              "معالجة البيانات المسبقة",
              "تحجيم الخصائص وتطبيعها",
              "القيم المفقودة والبيانات الفئوية",
              "الاختيار: الإقصاء العودي للخصائص، SelectKBest، L1",
              "الاستخلاص: PCA، LDA، t-SNE"
            ],
            "practical": "تنظيف ومعالجة مجموعة بيانات حقيقية."
          },
          "groups": [
            {
              "en": "Encoding and selection",
              "ar": "الترميز والاختيار",
              "videos": [
                {
                  "n": 50,
                  "star": true
                },
                {
                  "n": 47,
                  "star": true
                },
                {
                  "n": 25,
                  "star": false
                },
                {
                  "n": 26,
                  "star": true
                },
                {
                  "n": 7,
                  "star": false
                },
                {
                  "n": 8,
                  "star": true
                }
              ]
            },
            {
              "en": "Extraction",
              "ar": "الاستخلاص",
              "videos": [
                {
                  "n": 32,
                  "star": false
                },
                {
                  "n": 30,
                  "star": false
                },
                {
                  "n": 35,
                  "star": false
                },
                {
                  "n": 39,
                  "star": false
                }
              ]
            }
          ]
        },
        {
          "id": "6.2",
          "en": {
            "title": "Anomaly Detection",
            "bullets": [
              "Types: point, contextual, collective",
              "Statistical: Z-score, Grubbs’ test",
              "Machine learning: Isolation Forest, One-Class SVM, LOF, autoencoders",
              "Metrics: precision at N, ROC, AUC, F1 for imbalance"
            ],
            "practical": "Detect anomalies in a dataset with different methods."
          },
          "ar": {
            "title": "كشف الشذوذ",
            "bullets": [
              "الأنواع: نقطية، سياقية، جماعية",
              "إحصائية: Z-score، اختبار Grubbs",
              "تعلّم الآلة: Isolation Forest، One-Class SVM، LOF، المشفّرات التلقائية",
              "المقاييس: الإحكام عند N، ROC، AUC، F1 للبيانات غير المتوازنة"
            ],
            "practical": "كشف الشذوذ في مجموعة بيانات بطرق مختلفة."
          },
          "groups": [
            {
              "en": "Distance and evaluation",
              "ar": "المسافة والتقييم",
              "videos": [
                {
                  "n": 43,
                  "star": true
                },
                {
                  "n": 42,
                  "star": false
                },
                {
                  "n": 72,
                  "star": false
                },
                {
                  "n": 74,
                  "star": false
                },
                {
                  "n": 23,
                  "star": true
                },
                {
                  "n": 3,
                  "star": false
                },
                {
                  "n": 5,
                  "star": false
                },
                {
                  "n": 76,
                  "star": false
                }
              ]
            }
          ]
        }
      ],
      "videoCount": 18,
      "seconds": 14042,
      "time": "3 h 54 min",
      "videoNumbers": [
        3,
        5,
        7,
        8,
        23,
        25,
        26,
        30,
        32,
        35,
        39,
        42,
        43,
        47,
        50,
        72,
        74,
        76
      ]
    },
    {
      "id": 7,
      "slug": "recommenders",
      "coverage": "none",
      "en": {
        "title": "Recommender Systems and Association Rules",
        "short": "Recommenders",
        "standfirst": "Ratings that become factors, baskets that become rules.",
        "coverageNote": "Only cosine similarity overlaps; the rest is course material.",
        "diagram": {
          "title": "Matrix factorisation",
          "intro": "Fill an empty rating matrix with a few hidden tastes.",
          "points": [
            "Users rate a few items; most cells are empty.",
            "The matrix becomes two thin matrices: one taste vector per user, one per item.",
            "A missing rating is the dot product of the two vectors."
          ]
        }
      },
      "ar": {
        "title": "أنظمة التوصية وقواعد الارتباط",
        "short": "التوصية",
        "standfirst": "تقييمات تصبح عوامل، وسلال تصبح قواعد.",
        "coverageNote": "لا يتقاطع إلا تشابه جيب التمام، والباقي من المقرر.",
        "diagram": {
          "title": "تحليل المصفوفات",
          "intro": "املأ مصفوفة تقييمات فارغة بقليل من الأذواق الخفية.",
          "points": [
            "يقيّم المستخدمون عناصر قليلة؛ معظم الخلايا فارغة.",
            "تتحول المصفوفة إلى مصفوفتين رفيعتين: متجه ذوق لكل مستخدم، ومتجه لكل عنصر.",
            "التقييم المفقود هو الجداء النقطي للمتجهين."
          ]
        }
      },
      "lessons": [
        {
          "id": "7.1",
          "en": {
            "title": "Recommender Systems",
            "bullets": [
              "Content-based filtering",
              "Collaborative filtering: user-based and item-based",
              "Matrix factorization: SVD, ALS, NMF",
              "Hybrid methods",
              "Metrics: MAE, RMSE, precision at K, MRR, NDCG"
            ],
            "practical": "Build a simple recommender with collaborative filtering and matrix factorization."
          },
          "ar": {
            "title": "أنظمة التوصية",
            "bullets": [
              "الترشيح القائم على المحتوى",
              "الترشيح التعاوني: حسب المستخدم وحسب العنصر",
              "تحليل المصفوفات: SVD، ALS، NMF",
              "الطرق الهجينة",
              "المقاييس: MAE، RMSE، الإحكام عند K، MRR، NDCG"
            ],
            "practical": "بناء نظام توصية بسيط بالترشيح التعاوني وتحليل المصفوفات."
          },
          "groups": [
            {
              "en": "The one overlapping idea",
              "ar": "الفكرة المتقاطعة الوحيدة",
              "videos": [
                {
                  "n": 71,
                  "star": true
                },
                {
                  "n": 10,
                  "star": false
                }
              ]
            }
          ]
        },
        {
          "id": "7.2",
          "en": {
            "title": "Association Rule Learning",
            "bullets": [
              "Market basket analysis",
              "Apriori",
              "Eclat",
              "FP-Growth",
              "Metrics: support, confidence, lift, conviction"
            ],
            "practical": "Implement and analyse association rules on transactional data."
          },
          "ar": {
            "title": "تعلّم قواعد الارتباط",
            "bullets": [
              "تحليل سلة السوق",
              "Apriori",
              "Eclat",
              "FP-Growth",
              "المقاييس: الدعم، الثقة، الرفع، الاقتناع"
            ],
            "practical": "تنفيذ وتحليل قواعد الارتباط على بيانات المعاملات."
          },
          "groups": []
        }
      ],
      "videoCount": 2,
      "seconds": 2261,
      "time": "38 min",
      "videoNumbers": [
        10,
        71
      ]
    },
    {
      "id": 8,
      "slug": "privacy-and-ethics",
      "coverage": "none",
      "en": {
        "title": "Privacy and Ethics",
        "short": "Privacy, ethics",
        "standfirst": "Where the data lives, who it harms, and how it ships.",
        "coverageNote": "Nothing in the playlist covers this chapter.",
        "diagram": {
          "title": "Federated averaging",
          "intro": "Train where the data already is, then move only the weights.",
          "points": [
            "Each device trains a local copy on its own data.",
            "Only the model weights travel to the server.",
            "The server averages the weights into one global model, and sends it back."
          ]
        }
      },
      "ar": {
        "title": "الخصوصية والأخلاقيات",
        "short": "الخصوصية، الأخلاقيات",
        "standfirst": "أين تعيش البيانات، ومن تتضرر، وكيف تُنشر.",
        "coverageNote": "لا شيء في القائمة يغطي هذا الفصل.",
        "diagram": {
          "title": "المتوسط الفيدرالي",
          "intro": "درّب حيث توجد البيانات، ثم انقل الأوزان فقط.",
          "points": [
            "يتدرّب كل جهاز على نسخة محلية ببياناته.",
            "تنتقل أوزان النموذج فقط إلى الخادم.",
            "يجمع الخادم الأوزان في نموذج عالمي واحد، ثم يعيده."
          ]
        }
      },
      "lessons": [
        {
          "id": "8.1",
          "en": {
            "title": "Federated Learning and Ethical Considerations",
            "bullets": [
              "Introduction to federated learning",
              "Federated averaging",
              "Privacy: differential privacy, secure multiparty computation",
              "Ethics: bias, fairness, accountability",
              "Interpretability: SHAP, LIME, fairness-aware ML",
              "Deployment: model serving, A/B testing, CI/CD for ML"
            ],
            "practical": "Implement a simple federated learning system."
          },
          "ar": {
            "title": "التعلّم الفيدرالي والاعتبارات الأخلاقية",
            "bullets": [
              "مقدمة في التعلّم الفيدرالي",
              "المتوسط الفيدرالي",
              "الخصوصية: الخصوصية التفاضلية، الحساب الآمن متعدد الأطراف",
              "الأخلاقيات: التحيّز، الإنصاف، المساءلة",
              "التفسيرية: SHAP، LIME، التعلّم المراعي للإنصاف",
              "النشر: خدمة النماذج، اختبار A/B، التكامل والتسليم المستمر لتعلّم الآلة"
            ],
            "practical": "تنفيذ نظام تعلّم فيدرالي بسيط."
          },
          "groups": []
        }
      ],
      "videoCount": 0,
      "seconds": 0,
      "time": "0 min",
      "videoNumbers": []
    }
  ],
  "gaps": [
    {
      "chapter": 4,
      "en": "Genetic algorithms, belief functions",
      "ar": "الخوارزميات الجينية، دوال الاعتقاد",
      "noteEn": "Search, selection, crossover, mutation",
      "noteAr": "بحث، انتخاب، تزاوج، طفرة"
    },
    {
      "chapter": 5,
      "en": "Semi-supervised learning",
      "ar": "التعلّم شبه الموجّه",
      "noteEn": "Self-training, co-training, semi-supervised SVM",
      "noteAr": "التدريب الذاتي، التدريب المشترك، SVM شبه موجّه"
    },
    {
      "chapter": 5,
      "en": "Q-learning, SARSA, policy gradients",
      "ar": "Q-Learning وSARSA وتدرج السياسة",
      "noteEn": "The playlist stops at the concepts",
      "noteAr": "تتوقف القائمة عند المفاهيم"
    },
    {
      "chapter": 7,
      "en": "Association rules",
      "ar": "قواعد الارتباط",
      "noteEn": "Apriori, Eclat, FP-Growth, lift",
      "noteAr": "Apriori، Eclat، FP-Growth، الرفع"
    },
    {
      "chapter": 7,
      "en": "Recommendation metrics",
      "ar": "مقاييس التوصية",
      "noteEn": "Precision at K, MRR, NDCG",
      "noteAr": "الإحكام عند K، MRR، NDCG"
    },
    {
      "chapter": 8,
      "en": "Federated learning, SHAP, LIME",
      "ar": "التعلّم الفيدرالي، SHAP، LIME",
      "noteEn": "Privacy, fairness, deployment",
      "noteAr": "الخصوصية، الإنصاف، النشر"
    }
  ],
  "videos": [
    {
      "n": 1,
      "id": "Gv9_4yMHFhI",
      "title": "A Gentle Introduction to Machine Learning",
      "duration": "12:45",
      "seconds": 765,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
      "chapters": [
        1
      ],
      "primary": 1,
      "note": [
        "What machine learning is, and the three kinds that matter first.",
        "ما هو تعلّم الآلة، والأنواع الثلاثة التي تهم أولًا."
      ]
    },
    {
      "n": 2,
      "id": "fSytzGwwBVw",
      "title": "Machine Learning Fundamentals: Cross Validation",
      "duration": "6:05",
      "seconds": 365,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=fSytzGwwBVw",
      "chapters": [
        1
      ],
      "primary": 1,
      "note": [
        "How to test a model on data it has not seen.",
        "كيف تختبر نموذجًا على بيانات لم يرها."
      ]
    },
    {
      "n": 3,
      "id": "Kdsp6soqA7o",
      "title": "Machine Learning Fundamentals: The Confusion Matrix",
      "duration": "7:13",
      "seconds": 433,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=Kdsp6soqA7o",
      "chapters": [
        1,
        6
      ],
      "primary": 1,
      "note": [
        "The four boxes behind accuracy, precision and recall.",
        "المربعات الأربعة وراء الدقة والإحكام والاستدعاء."
      ]
    },
    {
      "n": 4,
      "id": "vP06aMoz4v8",
      "title": "Machine Learning Fundamentals: Sensitivity and Specificity",
      "duration": "11:47",
      "seconds": 707,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=vP06aMoz4v8",
      "chapters": [
        1
      ],
      "primary": 1,
      "note": [
        "Two numbers that matter when a miss is costly.",
        "رقمان يهمّان عندما يكون الخطأ مكلفًا."
      ]
    },
    {
      "n": 5,
      "id": "PWvfrTgaPBI",
      "title": "The Sensitivity, Specificity, Precision, Recall Sing-a-Long!!!",
      "duration": "0:42",
      "seconds": 42,
      "published": "4y ago",
      "url": "https://www.youtube.com/watch?v=PWvfrTgaPBI",
      "chapters": [
        6
      ],
      "primary": 6,
      "note": [
        "Precision and recall, in forty-two seconds.",
        "الإحكام والاستدعاء، في اثنتين وأربعين ثانية."
      ]
    },
    {
      "n": 6,
      "id": "EuBBz3bI-aA",
      "title": "Machine Learning Fundamentals: Bias and Variance",
      "duration": "6:36",
      "seconds": 396,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=EuBBz3bI-aA",
      "chapters": [
        1
      ],
      "primary": 1,
      "note": [
        "The trade-off behind every underfit and overfit.",
        "المقايضة وراء كل نقص أو فرط في التلاؤم."
      ]
    },
    {
      "n": 7,
      "id": "YtebGVx-Fxw",
      "title": "Entropy (for data science) Clearly Explained!!!",
      "duration": "16:35",
      "seconds": 995,
      "published": "5y ago",
      "url": "https://www.youtube.com/watch?v=YtebGVx-Fxw",
      "chapters": [
        1,
        6
      ],
      "primary": 1,
      "note": [
        "Entropy, the information view of a distribution.",
        "الإنتروبيا، الرؤية المعلوماتية للتوزيع."
      ]
    },
    {
      "n": 8,
      "id": "eJIp_mgVLwE",
      "title": "Mutual Information, Clearly Explained!!!",
      "duration": "16:14",
      "seconds": 974,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=eJIp_mgVLwE",
      "chapters": [
        1,
        3,
        6
      ],
      "primary": 1,
      "note": [
        "How much one variable tells you about another.",
        "مقدار ما تخبرك به خاصية عن أخرى."
      ]
    },
    {
      "n": 9,
      "id": "PaFPbb66DxQ",
      "title": "The Main Ideas of Fitting a Line to Data (The Main Ideas of Least Squares and Linear Regression.)",
      "duration": "9:22",
      "seconds": 562,
      "published": "9y ago",
      "url": "https://www.youtube.com/watch?v=PaFPbb66DxQ",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Least squares from scratch: why the line sits there.",
        "المربعات الصغرى من الصفر: لماذا يستقر الخط هناك."
      ]
    },
    {
      "n": 10,
      "id": "7ArmBVF2dCs",
      "title": "Linear Regression, Clearly Explained!!!",
      "duration": "27:27",
      "seconds": 1647,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=7ArmBVF2dCs",
      "chapters": [
        1,
        2,
        7
      ],
      "primary": 1,
      "note": [
        "The line, the coefficients, and what R² says.",
        "الخط والمعاملات وما تعنيه R²."
      ]
    },
    {
      "n": 11,
      "id": "zITIFTsivN8",
      "title": "Multiple Regression, Clearly Explained!!!",
      "duration": "5:25",
      "seconds": 325,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=zITIFTsivN8",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Several predictors at once, and what changes.",
        "عدة متنبئات معًا، وما الذي يتغير."
      ]
    },
    {
      "n": 12,
      "id": "NF5_btOaCig",
      "title": "Using Linear Models for t-tests and ANOVA, Clearly Explained!!!",
      "duration": "11:38",
      "seconds": 698,
      "published": "9y ago",
      "url": "https://www.youtube.com/watch?v=NF5_btOaCig",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": null
    },
    {
      "n": 13,
      "id": "CqLGvwi-5Pc",
      "title": "Design Matrices For Linear Models, Clearly Explained!!!",
      "duration": "14:40",
      "seconds": 880,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=CqLGvwi-5Pc",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "How interaction and polynomial terms become columns.",
        "كيف تصبح حدود التفاعل والحدود المتعددة أعمدة."
      ]
    },
    {
      "n": 14,
      "id": "ARfXDSkQf1Y",
      "title": "Odds and Log(Odds), Clearly Explained!!!",
      "duration": "11:31",
      "seconds": 691,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=ARfXDSkQf1Y",
      "chapters": [
        1
      ],
      "primary": 1,
      "note": [
        "Odds and log-odds, the bridge to the logistic model.",
        "الاحتمالات المواتية ولوغاريتمها، الجسر إلى النموذج اللوجستي."
      ]
    },
    {
      "n": 15,
      "id": "8nm0G-1uJzA",
      "title": "Odds Ratios and Log(Odds Ratios), Clearly Explained!!!",
      "duration": "16:20",
      "seconds": 980,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=8nm0G-1uJzA",
      "chapters": [
        1
      ],
      "primary": 1,
      "note": [
        "How a probability becomes an interpretable effect.",
        "كيف يصبح الاحتمال أثرًا قابلًا للتفسير."
      ]
    },
    {
      "n": 16,
      "id": "yIYKR4sgzI8",
      "title": "StatQuest: Logistic Regression",
      "duration": "8:48",
      "seconds": 528,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=yIYKR4sgzI8",
      "chapters": [
        2,
        4
      ],
      "primary": 2,
      "note": [
        "The sigmoid, the boundary and the log-odds.",
        "السيجمويد والحد الفاصل ولوغاريتم الاحتمالات."
      ]
    },
    {
      "n": 17,
      "id": "vN5cNN2-HWE",
      "title": "Logistic Regression Details Pt1: Coefficients",
      "duration": "19:02",
      "seconds": 1142,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=vN5cNN2-HWE",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "What each coefficient means in a logistic model.",
        "ماذا يعني كل معامل في النموذج اللوجستي."
      ]
    },
    {
      "n": 18,
      "id": "BfKanl1aSG0",
      "title": "Logistic Regression Details Pt 2: Maximum Likelihood",
      "duration": "10:23",
      "seconds": 623,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=BfKanl1aSG0",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Maximum likelihood: how the parameters are found.",
        "الإمكان الأعظم: كيف تُوجد المعاملات."
      ]
    },
    {
      "n": 19,
      "id": "xxFYro8QuXA",
      "title": "Logistic Regression Details Pt 3: R-squared and p-value",
      "duration": "15:25",
      "seconds": 925,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=xxFYro8QuXA",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "R² and p-values for a logistic fit.",
        "R² وقيم p لملاءمة لوجستية."
      ]
    },
    {
      "n": 20,
      "id": "9T0wlKdew6I",
      "title": "Saturated Models and Deviance",
      "duration": "18:40",
      "seconds": 1120,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=9T0wlKdew6I",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": null
    },
    {
      "n": 21,
      "id": "C4N3_XJJ-jU",
      "title": "Logistic Regression in R, Clearly Explained!!!!",
      "duration": "17:15",
      "seconds": 1035,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=C4N3_XJJ-jU",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": null
    },
    {
      "n": 22,
      "id": "JC56jS2gVUE",
      "title": "Deviance Residuals",
      "duration": "6:18",
      "seconds": 378,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=JC56jS2gVUE",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": null
    },
    {
      "n": 23,
      "id": "4jRBRDbJemM",
      "title": "ROC and AUC, Clearly Explained!",
      "duration": "16:17",
      "seconds": 977,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=4jRBRDbJemM",
      "chapters": [
        2,
        6
      ],
      "primary": 2,
      "note": [
        "ROC and AUC, the standard judge of a classifier.",
        "ROC وAUC، الحكم المعتاد على المصنّف."
      ]
    },
    {
      "n": 24,
      "id": "qcvAqAH60Yw",
      "title": "ROC and AUC in R",
      "duration": "15:13",
      "seconds": 913,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=qcvAqAH60Yw",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 25,
      "id": "Q81RR3yKn30",
      "title": "Regularization Part 1: Ridge (L2) Regression",
      "duration": "20:27",
      "seconds": 1227,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=Q81RR3yKn30",
      "chapters": [
        2,
        6
      ],
      "primary": 2,
      "note": [
        "Ridge: shrink the coefficients, never to zero.",
        "ريدج: قلّص المعاملات، لكن ليس إلى الصفر."
      ]
    },
    {
      "n": 26,
      "id": "NGf0voTMlcs",
      "title": "Regularization Part 2: Lasso (L1) Regression",
      "duration": "8:19",
      "seconds": 499,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=NGf0voTMlcs",
      "chapters": [
        2,
        6
      ],
      "primary": 2,
      "note": [
        "Lasso: shrink and select, with exact zeros.",
        "لاسو: قلّص واختر، بأصفار تامة."
      ]
    },
    {
      "n": 27,
      "id": "Xm2C_gTAl8c",
      "title": "Ridge vs Lasso Regression, Visualized!!!",
      "duration": "9:06",
      "seconds": 546,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=Xm2C_gTAl8c",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "The geometry that makes Ridge and Lasso different.",
        "الهندسة التي تفرّق بين ريدج ولاسو."
      ]
    },
    {
      "n": 28,
      "id": "1dKRdX9bfIo",
      "title": "Regularization Part 3: Elastic Net Regression",
      "duration": "5:19",
      "seconds": 319,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=1dKRdX9bfIo",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Elastic Net: the compromise between L1 and L2.",
        "إيلاستيك نت: التسوية بين L1 وL2."
      ]
    },
    {
      "n": 29,
      "id": "ctmNq7FgbvI",
      "title": "Ridge, Lasso and Elastic-Net Regression in R",
      "duration": "17:51",
      "seconds": 1071,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=ctmNq7FgbvI",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": null
    },
    {
      "n": 30,
      "id": "FgakZw6K1QQ",
      "title": "StatQuest: Principal Component Analysis (PCA), Step-by-Step",
      "duration": "21:58",
      "seconds": 1318,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=FgakZw6K1QQ",
      "chapters": [
        3,
        6
      ],
      "primary": 3,
      "note": [
        "Eigenvalues and eigenvectors, step by step.",
        "القيم والمتجهات الذاتية، خطوة بخطوة."
      ]
    },
    {
      "n": 31,
      "id": "HMOI_lkzW08",
      "title": "StatQuest: PCA main ideas in only 5 minutes!!!",
      "duration": "6:05",
      "seconds": 365,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=HMOI_lkzW08",
      "chapters": [
        3
      ],
      "primary": 3,
      "note": [
        "PCA in five minutes.",
        "PCA في خمس دقائق."
      ]
    },
    {
      "n": 32,
      "id": "oRvgq966yZg",
      "title": "StatQuest: PCA - Practical Tips",
      "duration": "8:20",
      "seconds": 500,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=oRvgq966yZg",
      "chapters": [
        3,
        6
      ],
      "primary": 3,
      "note": [
        "Scaling, and how many components to keep.",
        "التحجيم، وكم مكوّنًا تحتفظ به."
      ]
    },
    {
      "n": 33,
      "id": "0Jp4gsfOLMs",
      "title": "StatQuest: PCA in R",
      "duration": "8:57",
      "seconds": 537,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=0Jp4gsfOLMs",
      "chapters": [
        3
      ],
      "primary": 3,
      "note": null
    },
    {
      "n": 34,
      "id": "Lsue2gEM9D0",
      "title": "StatQuest: PCA in Python",
      "duration": "11:37",
      "seconds": 697,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=Lsue2gEM9D0",
      "chapters": [
        3
      ],
      "primary": 3,
      "note": [
        "PCA in Python.",
        "PCA ببايثون."
      ]
    },
    {
      "n": 35,
      "id": "azXCzI57Yfc",
      "title": "StatQuest: Linear Discriminant Analysis (LDA) clearly explained.",
      "duration": "15:12",
      "seconds": 912,
      "published": "10y ago",
      "url": "https://www.youtube.com/watch?v=azXCzI57Yfc",
      "chapters": [
        3,
        6
      ],
      "primary": 3,
      "note": [
        "LDA: a supervised projection.",
        "LDA: إسقاط موجّه."
      ]
    },
    {
      "n": 36,
      "id": "i4iUvjsGCMc",
      "title": "Bam!!! Clearly Explained!!!",
      "duration": "2:49",
      "seconds": 169,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=i4iUvjsGCMc",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 37,
      "id": "GEn-_dAyYME",
      "title": "StatQuest: MDS and PCoA",
      "duration": "8:18",
      "seconds": 498,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=GEn-_dAyYME",
      "chapters": [
        3
      ],
      "primary": 3,
      "note": [
        "MDS and PCoA: preserving distances.",
        "MDS وPCoA: الحفاظ على المسافات."
      ]
    },
    {
      "n": 38,
      "id": "pGAUHhLYp5Q",
      "title": "StatQuest: MDS and PCoA in R",
      "duration": "7:45",
      "seconds": 465,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=pGAUHhLYp5Q",
      "chapters": [
        3
      ],
      "primary": 3,
      "note": null
    },
    {
      "n": 39,
      "id": "NEaUSP4YerM",
      "title": "StatQuest: t-SNE, Clearly Explained",
      "duration": "11:48",
      "seconds": 708,
      "published": "9y ago",
      "url": "https://www.youtube.com/watch?v=NEaUSP4YerM",
      "chapters": [
        3,
        6
      ],
      "primary": 3,
      "note": [
        "t-SNE, the intuition.",
        "t-SNE، الحدس."
      ]
    },
    {
      "n": 40,
      "id": "7xHsRkOdVwo",
      "title": "StatQuest: Hierarchical Clustering",
      "duration": "11:19",
      "seconds": 679,
      "published": "9y ago",
      "url": "https://www.youtube.com/watch?v=7xHsRkOdVwo",
      "chapters": [
        3
      ],
      "primary": 3,
      "note": [
        "Dendrograms, linkage and cutting the tree.",
        "المخططات الشجرية والربط وقطع الشجرة."
      ]
    },
    {
      "n": 41,
      "id": "4b5d3muPQmA",
      "title": "StatQuest: K-means clustering",
      "duration": "8:30",
      "seconds": 510,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=4b5d3muPQmA",
      "chapters": [
        3
      ],
      "primary": 3,
      "note": [
        "K-means: centroids, updates and choosing k.",
        "K-means: المراكز والتحديثات واختيار k."
      ]
    },
    {
      "n": 42,
      "id": "RDZUdRSDOok",
      "title": "Clustering with DBSCAN, Clearly Explained!!!",
      "duration": "9:30",
      "seconds": 570,
      "published": "4y ago",
      "url": "https://www.youtube.com/watch?v=RDZUdRSDOok",
      "chapters": [
        3,
        6
      ],
      "primary": 3,
      "note": [
        "DBSCAN: density, borders and noise.",
        "DBSCAN: الكثافة والحدود والضوضاء."
      ]
    },
    {
      "n": 43,
      "id": "HVXime0nQeI",
      "title": "StatQuest: K-nearest neighbors, Clearly Explained",
      "duration": "5:30",
      "seconds": 330,
      "published": "9y ago",
      "url": "https://www.youtube.com/watch?v=HVXime0nQeI",
      "chapters": [
        6
      ],
      "primary": 6,
      "note": [
        "K-nearest neighbours: the distance idea.",
        "أقرب الجيران: فكرة المسافة."
      ]
    },
    {
      "n": 44,
      "id": "O2L2Uv9pdDA",
      "title": "Naive Bayes, Clearly Explained!!!",
      "duration": "15:12",
      "seconds": 912,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=O2L2Uv9pdDA",
      "chapters": [
        1,
        4
      ],
      "primary": 1,
      "note": [
        "Bayes’ theorem, the heart of Bayesian thinking.",
        "نظرية بايز، قلب التفكير البايزي."
      ]
    },
    {
      "n": 45,
      "id": "H3EjCKtlVog",
      "title": "Gaussian Naive Bayes, Clearly Explained!!!",
      "duration": "9:26",
      "seconds": 566,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=H3EjCKtlVog",
      "chapters": [
        1,
        4,
        5
      ],
      "primary": 1,
      "note": [
        "A probabilistic classifier in its simplest form.",
        "مصنّف احتمالي في أبسط صوره."
      ]
    },
    {
      "n": 46,
      "id": "_L39rN6gz7Y",
      "title": "Decision and Classification Trees, Clearly Explained!!!",
      "duration": "18:08",
      "seconds": 1088,
      "published": "5y ago",
      "url": "https://www.youtube.com/watch?v=_L39rN6gz7Y",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Splits, Gini and entropy, and when to stop.",
        "التقسيمات وجيني والإنتروبيا، ومتى تتوقف."
      ]
    },
    {
      "n": 47,
      "id": "wpNl-JwwplA",
      "title": "StatQuest: Decision Trees, Part 2 - Feature Selection and Missing Data",
      "duration": "5:16",
      "seconds": 316,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=wpNl-JwwplA",
      "chapters": [
        2,
        6
      ],
      "primary": 2,
      "note": [
        "Missing data and feature selection inside trees.",
        "البيانات المفقودة واختيار الخصائص داخل الأشجار."
      ]
    },
    {
      "n": 48,
      "id": "g9c66TUylZ4",
      "title": "Regression Trees, Clearly Explained!!!",
      "duration": "22:33",
      "seconds": 1353,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=g9c66TUylZ4",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "The same tree idea with a numeric target.",
        "الفكرة نفسها بشجرة ذات هدف رقمي."
      ]
    },
    {
      "n": 49,
      "id": "D0efHEJsfHo",
      "title": "How to Prune Regression Trees, Clearly Explained!!!",
      "duration": "16:15",
      "seconds": 975,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=D0efHEJsfHo",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Pruning: how to stop a tree from memorising.",
        "التقليم: كيف تمنع الشجرة من الحفظ."
      ]
    },
    {
      "n": 50,
      "id": "589nCGeWG1w",
      "title": "One-Hot, Label, Target and K-Fold Target Encoding, Clearly Explained!!!",
      "duration": "15:23",
      "seconds": 923,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=589nCGeWG1w",
      "chapters": [
        6
      ],
      "primary": 6,
      "note": [
        "One-hot, label, target and K-fold target encoding.",
        "الترميز الأحادي والوسمي والهدفي وK-fold."
      ]
    },
    {
      "n": 51,
      "id": "q90UDEgYqeI",
      "title": "Classification Trees in Python from Start to Finish",
      "duration": "1:06:24",
      "seconds": 3984,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=q90UDEgYqeI",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "A full classification tree, built in Python.",
        "شجرة تصنيف كاملة، مبنية بلغة بايثون."
      ]
    },
    {
      "n": 52,
      "id": "J4Wdy0Wc_xQ",
      "title": "StatQuest: Random Forests Part 1 - Building, Using and Evaluating",
      "duration": "9:54",
      "seconds": 594,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Bootstrap samples plus random feature subsets.",
        "عينات الإقلاع مع مجموعات خصائص عشوائية."
      ]
    },
    {
      "n": 53,
      "id": "mIlw5j3WyVk",
      "title": "StatQuest: Random Forests Part 2: Missing data and clustering",
      "duration": "10:48",
      "seconds": 648,
      "published": "4mo ago",
      "url": "https://www.youtube.com/watch?v=mIlw5j3WyVk",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Missing data and clustering with forests.",
        "البيانات المفقودة والتجميع بالغابات."
      ]
    },
    {
      "n": 54,
      "id": "6EXPYzbfLCE",
      "title": "StatQuest: Random Forests in R",
      "duration": "15:10",
      "seconds": 910,
      "published": "8y ago",
      "url": "https://www.youtube.com/watch?v=6EXPYzbfLCE",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": null
    },
    {
      "n": 55,
      "id": "wl1myxrtQHQ",
      "title": "The Chain Rule, Clearly Explained!!!",
      "duration": "18:24",
      "seconds": 1104,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=wl1myxrtQHQ",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "The chain rule, the prerequisite for backprop.",
        "قاعدة السلسلة، شرط الانتشار العكسي."
      ]
    },
    {
      "n": 56,
      "id": "sDv4f4s2SB8",
      "title": "Gradient Descent, Step-by-Step",
      "duration": "23:54",
      "seconds": 1434,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=sDv4f4s2SB8",
      "chapters": [
        2,
        4
      ],
      "primary": 2,
      "note": [
        "Gradient descent: the step, the rate, the convergence.",
        "النزول التدرجي: الخطوة، المعدل، التقارب."
      ]
    },
    {
      "n": 57,
      "id": "vMh0zPT0tLI",
      "title": "Stochastic Gradient Descent, Clearly Explained!!!",
      "duration": "10:53",
      "seconds": 653,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=vMh0zPT0tLI",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Stochastic gradient descent and mini-batches.",
        "النزول التدرجي العشوائي والدفعات الصغيرة."
      ]
    },
    {
      "n": 58,
      "id": "LsK-xG1cLYA",
      "title": "AdaBoost, Clearly Explained",
      "duration": "20:54",
      "seconds": 1254,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=LsK-xG1cLYA",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "AdaBoost, the original boosting algorithm.",
        "AdaBoost، خوارزمية التعزيز الأصلية."
      ]
    },
    {
      "n": 59,
      "id": "3CC4N4z3GJc",
      "title": "Gradient Boost Part 1 (of 4): Regression Main Ideas",
      "duration": "15:52",
      "seconds": 952,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=3CC4N4z3GJc",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Gradient Boost 1/4: regression, main ideas.",
        "Gradient Boost 1/4: الانحدار، الأفكار الأساسية."
      ]
    },
    {
      "n": 60,
      "id": "2xudPOBz-vs",
      "title": "Gradient Boost Part 2 (of 4): Regression Details",
      "duration": "26:46",
      "seconds": 1606,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=2xudPOBz-vs",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Gradient Boost 2/4: regression details.",
        "Gradient Boost 2/4: تفاصيل الانحدار."
      ]
    },
    {
      "n": 61,
      "id": "jxuNLH5dXCs",
      "title": "Gradient Boost Part 3 (of 4): Classification",
      "duration": "17:03",
      "seconds": 1023,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=jxuNLH5dXCs",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Gradient Boost 3/4: classification.",
        "Gradient Boost 3/4: التصنيف."
      ]
    },
    {
      "n": 62,
      "id": "StWY5QWMXCw",
      "title": "Gradient Boost Part 4 (of 4): Classification Details",
      "duration": "37:00",
      "seconds": 2220,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=StWY5QWMXCw",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "Gradient Boost 4/4: classification details.",
        "Gradient Boost 4/4: تفاصيل التصنيف."
      ]
    },
    {
      "n": 63,
      "id": "W4sYsXGeCls",
      "title": "Troll 2, Clearly Explained!!!",
      "duration": "5:06",
      "seconds": 306,
      "published": "4y ago",
      "url": "https://www.youtube.com/watch?v=W4sYsXGeCls",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 64,
      "id": "OtD8wVaFm6E",
      "title": "XGBoost Part 1 (of 4): Regression",
      "duration": "25:46",
      "seconds": 1546,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=OtD8wVaFm6E",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "XGBoost 1/4: regression.",
        "XGBoost 1/4: الانحدار."
      ]
    },
    {
      "n": 65,
      "id": "8b1JEDvenQU",
      "title": "XGBoost Part 2 (of 4): Classification",
      "duration": "25:18",
      "seconds": 1518,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=8b1JEDvenQU",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "XGBoost 2/4: classification.",
        "XGBoost 2/4: التصنيف."
      ]
    },
    {
      "n": 66,
      "id": "ZVFeW798-2I",
      "title": "XGBoost Part 3 (of 4): Mathematical Details",
      "duration": "27:24",
      "seconds": 1644,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=ZVFeW798-2I",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "XGBoost 3/4: the mathematics.",
        "XGBoost 3/4: الرياضيات."
      ]
    },
    {
      "n": 67,
      "id": "oRrKeUCEbq8",
      "title": "XGBoost Part 4 (of 4): Crazy Cool Optimizations",
      "duration": "24:27",
      "seconds": 1467,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=oRrKeUCEbq8",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "XGBoost 4/4: the optimisations.",
        "XGBoost 4/4: التحسينات."
      ]
    },
    {
      "n": 68,
      "id": "GrJP9FLV3FE",
      "title": "XGBoost in Python from Start to Finish",
      "duration": "56:43",
      "seconds": 3403,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=GrJP9FLV3FE",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "XGBoost in Python, from start to finish.",
        "XGBoost ببايثون، من البداية إلى النهاية."
      ]
    },
    {
      "n": 69,
      "id": "KXOTSkPL2X4",
      "title": "CatBoost Part 1: Ordered Target Encoding",
      "duration": "8:32",
      "seconds": 512,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=KXOTSkPL2X4",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "CatBoost 1/2: ordered target encoding.",
        "CatBoost 1/2: ترميز الهدف المرتّب."
      ]
    },
    {
      "n": 70,
      "id": "3Bg2XRFOTzg",
      "title": "CatBoost Part 2: Building and Using Trees",
      "duration": "16:16",
      "seconds": 976,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=3Bg2XRFOTzg",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "CatBoost 2/2: building and using trees.",
        "CatBoost 2/2: بناء الأشجار واستخدامها."
      ]
    },
    {
      "n": 71,
      "id": "e9U0QAFbfLI",
      "title": "Cosine Similarity, Clearly Explained!!!",
      "duration": "10:14",
      "seconds": 614,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=e9U0QAFbfLI",
      "chapters": [
        2,
        7
      ],
      "primary": 2,
      "note": [
        "Cosine similarity: the measure behind recommendations.",
        "تشابه جيب التمام: المقياس وراء التوصيات."
      ]
    },
    {
      "n": 72,
      "id": "efR1C6CvhmE",
      "title": "Support Vector Machines Part 1 (of 3): Main Ideas!!!",
      "duration": "20:32",
      "seconds": 1232,
      "published": "7y ago",
      "url": "https://www.youtube.com/watch?v=efR1C6CvhmE",
      "chapters": [
        2,
        5,
        6
      ],
      "primary": 2,
      "note": [
        "Margin, support vectors and the soft margin.",
        "الهامش، المتجهات الداعمة، والهامش اللين."
      ]
    },
    {
      "n": 73,
      "id": "Toet3EiSFcM",
      "title": "Support Vector Machines Part 2: The Polynomial Kernel (Part 2 of 3)",
      "duration": "7:15",
      "seconds": 435,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=Toet3EiSFcM",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "The polynomial kernel, drawn.",
        "النواة متعددة الحدود، مرسومة."
      ]
    },
    {
      "n": 74,
      "id": "Qc5IyLW_hns",
      "title": "Support Vector Machines Part 3: The Radial (RBF) Kernel (Part 3 of 3)",
      "duration": "15:52",
      "seconds": 952,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=Qc5IyLW_hns",
      "chapters": [
        2,
        6
      ],
      "primary": 2,
      "note": [
        "The RBF kernel, and why it bends space.",
        "نواة RBF، ولماذا تحني الفضاء."
      ]
    },
    {
      "n": 75,
      "id": "8A7L0GsBiLQ",
      "title": "Support Vector Machines in Python from Start to Finish.",
      "duration": "44:49",
      "seconds": 2689,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=8A7L0GsBiLQ",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "An SVM in Python, from start to finish.",
        "آلة متجهات داعمة ببايثون، من البداية إلى النهاية."
      ]
    },
    {
      "n": 76,
      "id": "CqOfi41LfDw",
      "title": "The Essential Main Ideas of Neural Networks",
      "duration": "18:54",
      "seconds": 1134,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=CqOfi41LfDw",
      "chapters": [
        6
      ],
      "primary": 6,
      "note": [
        "Neural network basics, the ground under autoencoders.",
        "أساسيات الشبكات العصبية، أرض المشفّرات التلقائية."
      ]
    },
    {
      "n": 77,
      "id": "IN2XmBhILt4",
      "title": "Neural Networks Pt. 2: Backpropagation Main Ideas",
      "duration": "17:34",
      "seconds": 1054,
      "published": "6y ago",
      "url": "https://www.youtube.com/watch?v=IN2XmBhILt4",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 78,
      "id": "iyn2zdALii8",
      "title": "Backpropagation Details Pt. 1: Optimizing 3 parameters simultaneously.",
      "duration": "18:32",
      "seconds": 1112,
      "published": "5y ago",
      "url": "https://www.youtube.com/watch?v=iyn2zdALii8",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 79,
      "id": "GKZoOHXGcLo",
      "title": "Backpropagation Details Pt. 2: Going bonkers with The Chain Rule",
      "duration": "13:09",
      "seconds": 789,
      "published": "5y ago",
      "url": "https://www.youtube.com/watch?v=GKZoOHXGcLo",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 80,
      "id": "68BZ5f7P94E",
      "title": "Neural Networks Pt. 3: ReLU In Action!!!",
      "duration": "8:58",
      "seconds": 538,
      "published": "5y ago",
      "url": "https://www.youtube.com/watch?v=68BZ5f7P94E",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 81,
      "id": "83LYR-1IcjA",
      "title": "Neural Networks Pt. 4: Multiple Inputs and Outputs",
      "duration": "13:50",
      "seconds": 830,
      "published": "5y ago",
      "url": "https://www.youtube.com/watch?v=83LYR-1IcjA",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 82,
      "id": "KpKog-L9veg",
      "title": "Neural Networks Part 5: ArgMax and SoftMax",
      "duration": "14:03",
      "seconds": 843,
      "published": "5y ago",
      "url": "https://www.youtube.com/watch?v=KpKog-L9veg",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 83,
      "id": "M59JElEPgIg",
      "title": "The SoftMax Derivative, Step-by-Step!!!",
      "duration": "7:13",
      "seconds": 433,
      "published": "5y ago",
      "url": "https://www.youtube.com/watch?v=M59JElEPgIg",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 84,
      "id": "6ArSys5qHAU",
      "title": "Neural Networks Part 6: Cross Entropy",
      "duration": "9:31",
      "seconds": 571,
      "published": "5y ago",
      "url": "https://www.youtube.com/watch?v=6ArSys5qHAU",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 85,
      "id": "xBEh66V9gZo",
      "title": "Neural Networks Part 7: Cross Entropy Derivatives and Backpropagation",
      "duration": "22:08",
      "seconds": 1328,
      "published": "5y ago",
      "url": "https://www.youtube.com/watch?v=xBEh66V9gZo",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 86,
      "id": "HGwBXDKFk9I",
      "title": "Neural Networks Part 8: Image Classification with Convolutional Neural Networks (CNNs)",
      "duration": "15:24",
      "seconds": 924,
      "published": "5y ago",
      "url": "https://www.youtube.com/watch?v=HGwBXDKFk9I",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 87,
      "id": "AsNTP8Kwu80",
      "title": "Recurrent Neural Networks (RNNs), Clearly Explained!!!",
      "duration": "16:37",
      "seconds": 997,
      "published": "4y ago",
      "url": "https://www.youtube.com/watch?v=AsNTP8Kwu80",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 88,
      "id": "YCzL96nL7j0",
      "title": "Long Short-Term Memory (LSTM), Clearly Explained",
      "duration": "20:45",
      "seconds": 1245,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=YCzL96nL7j0",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 89,
      "id": "viZrOnJclY0",
      "title": "Word Embedding and Word2Vec, Clearly Explained!!!",
      "duration": "16:12",
      "seconds": 972,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=viZrOnJclY0",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 90,
      "id": "L8HKweZIOmg",
      "title": "Sequence-to-Sequence (seq2seq) Encoder-Decoder Neural Networks, Clearly Explained!!!",
      "duration": "16:50",
      "seconds": 1010,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=L8HKweZIOmg",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 91,
      "id": "PSs6nxngL6k",
      "title": "Attention for Neural Networks, Clearly Explained!!!",
      "duration": "15:51",
      "seconds": 951,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=PSs6nxngL6k",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 92,
      "id": "zxQyTK8quyY",
      "title": "Transformer Neural Networks, ChatGPT’s foundation, Clearly Explained!!!",
      "duration": "36:15",
      "seconds": 2175,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=zxQyTK8quyY",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 93,
      "id": "bQ5BoolX9Ag",
      "title": "Decoder-Only Transformers, ChatGPTs specific Transformer, Clearly Explained!!!",
      "duration": "36:45",
      "seconds": 2205,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=bQ5BoolX9Ag",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 94,
      "id": "GDN649X_acE",
      "title": "Encoder-Only Transformers (like BERT) for RAG, Clearly Explained!!!",
      "duration": "18:52",
      "seconds": 1132,
      "published": "1y ago",
      "url": "https://www.youtube.com/watch?v=GDN649X_acE",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 95,
      "id": "L35fFDpwIM4",
      "title": "Tensors for Neural Networks, Clearly Explained!!!",
      "duration": "9:40",
      "seconds": 580,
      "published": "4y ago",
      "url": "https://www.youtube.com/watch?v=L35fFDpwIM4",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 96,
      "id": "ZTt9gsGcdDo",
      "title": "Essential Matrix Algebra for Neural Networks, Clearly Explained!!!",
      "duration": "30:01",
      "seconds": 1801,
      "published": "2y ago",
      "url": "https://www.youtube.com/watch?v=ZTt9gsGcdDo",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 97,
      "id": "KphmOJnLAdI",
      "title": "The matrix math behind transformer neural networks, one step at a time!!!",
      "duration": "23:43",
      "seconds": 1423,
      "published": "2y ago",
      "url": "https://www.youtube.com/watch?v=KphmOJnLAdI",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 98,
      "id": "FHdlXe1bSe4",
      "title": "The StatQuest Introduction to PyTorch",
      "duration": "23:22",
      "seconds": 1402,
      "published": "4y ago",
      "url": "https://www.youtube.com/watch?v=FHdlXe1bSe4",
      "chapters": [
        2
      ],
      "primary": 2,
      "note": [
        "PyTorch, where Adam and RMSprop are one line.",
        "PyTorch، حيث Adam وRMSprop سطر واحد."
      ]
    },
    {
      "n": 99,
      "id": "khMzi6xPbuM",
      "title": "Introduction to Coding Neural Networks with PyTorch and Lightning",
      "duration": "20:43",
      "seconds": 1243,
      "published": "4y ago",
      "url": "https://www.youtube.com/watch?v=khMzi6xPbuM",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 100,
      "id": "RHGiXPuo_pI",
      "title": "Long Short-Term Memory with PyTorch + Lightning",
      "duration": "33:24",
      "seconds": 2004,
      "published": "3y ago",
      "url": "https://www.youtube.com/watch?v=RHGiXPuo_pI",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 101,
      "id": "Qf06XDYXCXI",
      "title": "Word Embedding in PyTorch + Lightning",
      "duration": "32:02",
      "seconds": 1922,
      "published": "2 years ago",
      "url": "https://www.youtube.com/watch?v=Qf06XDYXCXI",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 102,
      "id": "C9QSpl5nmrY",
      "title": "Coding a ChatGPT Like Transformer From Scratch in PyTorch",
      "duration": "31:11",
      "seconds": 1871,
      "published": "2 years ago",
      "url": "https://www.youtube.com/watch?v=C9QSpl5nmrY",
      "chapters": [],
      "primary": null,
      "note": null
    },
    {
      "n": 103,
      "id": "Z-T0iJEXiwM",
      "title": "Reinforcement Learning: Essential Concepts",
      "duration": "18:13",
      "seconds": 1093,
      "published": "1 year ago",
      "url": "https://www.youtube.com/watch?v=Z-T0iJEXiwM",
      "chapters": [
        5
      ],
      "primary": 5,
      "note": [
        "Agent, environment, state, action, reward, policy.",
        "الوكيل، البيئة، الحالة، الفعل، المكافأة، السياسة."
      ]
    },
    {
      "n": 104,
      "id": "9hbQieQh7-o",
      "title": "Reinforcement Learning with Neural Networks: Essential Concepts",
      "duration": "24:00",
      "seconds": 1440,
      "published": "1 year ago",
      "url": "https://www.youtube.com/watch?v=9hbQieQh7-o",
      "chapters": [
        5
      ],
      "primary": 5,
      "note": [
        "Deep RL, the essential concepts.",
        "التعلّم المعزّز العميق، المفاهيم الأساسية."
      ]
    },
    {
      "n": 105,
      "id": "DVGmsnxB2UQ",
      "title": "Reinforcement Learning with Neural Networks: Mathematical Details",
      "duration": "25:01",
      "seconds": 1501,
      "published": "1 year ago",
      "url": "https://www.youtube.com/watch?v=DVGmsnxB2UQ",
      "chapters": [
        5
      ],
      "primary": 5,
      "note": [
        "Deep RL, the mathematical details.",
        "التعلّم المعزّز العميق، التفاصيل الرياضية."
      ]
    },
    {
      "n": 106,
      "id": "qPN_XZcJf_s",
      "title": "Reinforcement Learning with Human Feedback (RLHF), Clearly Explained!!!",
      "duration": "18:02",
      "seconds": 1082,
      "published": "1 year ago",
      "url": "https://www.youtube.com/watch?v=qPN_XZcJf_s",
      "chapters": [
        5
      ],
      "primary": 5,
      "note": [
        "RLHF, how reward shapes a language model.",
        "RLHF، كيف تشكّل المكافأة نموذجًا لغويًا."
      ]
    }
  ]
};
