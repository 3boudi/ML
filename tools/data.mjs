// Content for ML VII. English and Arabic strings live together so the two
// languages cannot drift. Video titles stay in English: the videos are in English.

export const META = {
  name: 'ML VII',
  author: 'Halitim Amin',
  semester: 7,
  coefficient: 4,
  unit: 'UEF2',
  playlist: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF',
  channel: 'https://www.youtube.com/@statquest',
  date: '2026-10-26',
};

// One note per video, used where the video is listed. [English, Arabic]
export const NOTES = {
  1: ['What machine learning is, and the three kinds that matter first.', 'ما هو تعلّم الآلة، والأنواع الثلاثة التي تهم أولًا.'],
  2: ['How to test a model on data it has not seen.', 'كيف تختبر نموذجًا على بيانات لم يرها.'],
  3: ['The four boxes behind accuracy, precision and recall.', 'المربعات الأربعة وراء الدقة والإحكام والاستدعاء.'],
  4: ['Two numbers that matter when a miss is costly.', 'رقمان يهمّان عندما يكون الخطأ مكلفًا.'],
  5: ['Precision and recall, in forty-two seconds.', 'الإحكام والاستدعاء، في اثنتين وأربعين ثانية.'],
  6: ['The trade-off behind every underfit and overfit.', 'المقايضة وراء كل نقص أو فرط في التلاؤم.'],
  7: ['Entropy, the information view of a distribution.', 'الإنتروبيا، الرؤية المعلوماتية للتوزيع.'],
  8: ['How much one variable tells you about another.', 'مقدار ما تخبرك به خاصية عن أخرى.'],
  9: ['Least squares from scratch: why the line sits there.', 'المربعات الصغرى من الصفر: لماذا يستقر الخط هناك.'],
  10: ['The line, the coefficients, and what R² says.', 'الخط والمعاملات وما تعنيه R².'],
  11: ['Several predictors at once, and what changes.', 'عدة متنبئات معًا، وما الذي يتغير.'],
  13: ['How interaction and polynomial terms become columns.', 'كيف تصبح حدود التفاعل والحدود المتعددة أعمدة.'],
  14: ['Odds and log-odds, the bridge to the logistic model.', 'الاحتمالات المواتية ولوغاريتمها، الجسر إلى النموذج اللوجستي.'],
  15: ['How a probability becomes an interpretable effect.', 'كيف يصبح الاحتمال أثرًا قابلًا للتفسير.'],
  16: ['The sigmoid, the boundary and the log-odds.', 'السيجمويد والحد الفاصل ولوغاريتم الاحتمالات.'],
  17: ['What each coefficient means in a logistic model.', 'ماذا يعني كل معامل في النموذج اللوجستي.'],
  18: ['Maximum likelihood: how the parameters are found.', 'الإمكان الأعظم: كيف تُوجد المعاملات.'],
  19: ['R² and p-values for a logistic fit.', 'R² وقيم p لملاءمة لوجستية.'],
  23: ['ROC and AUC, the standard judge of a classifier.', 'ROC وAUC، الحكم المعتاد على المصنّف.'],
  25: ['Ridge: shrink the coefficients, never to zero.', 'ريدج: قلّص المعاملات، لكن ليس إلى الصفر.'],
  26: ['Lasso: shrink and select, with exact zeros.', 'لاسو: قلّص واختر، بأصفار تامة.'],
  27: ['The geometry that makes Ridge and Lasso different.', 'الهندسة التي تفرّق بين ريدج ولاسو.'],
  28: ['Elastic Net: the compromise between L1 and L2.', 'إيلاستيك نت: التسوية بين L1 وL2.'],
  30: ['Eigenvalues and eigenvectors, step by step.', 'القيم والمتجهات الذاتية، خطوة بخطوة.'],
  31: ['PCA in five minutes.', 'PCA في خمس دقائق.'],
  32: ['Scaling, and how many components to keep.', 'التحجيم، وكم مكوّنًا تحتفظ به.'],
  34: ['PCA in Python.', 'PCA ببايثون.'],
  35: ['LDA: a supervised projection.', 'LDA: إسقاط موجّه.'],
  37: ['MDS and PCoA: preserving distances.', 'MDS وPCoA: الحفاظ على المسافات.'],
  39: ['t-SNE, the intuition.', 't-SNE، الحدس.'],
  40: ['Dendrograms, linkage and cutting the tree.', 'المخططات الشجرية والربط وقطع الشجرة.'],
  41: ['K-means: centroids, updates and choosing k.', 'K-means: المراكز والتحديثات واختيار k.'],
  42: ['DBSCAN: density, borders and noise.', 'DBSCAN: الكثافة والحدود والضوضاء.'],
  43: ['K-nearest neighbours: the distance idea.', 'أقرب الجيران: فكرة المسافة.'],
  44: ['Bayes’ theorem, the heart of Bayesian thinking.', 'نظرية بايز، قلب التفكير البايزي.'],
  45: ['A probabilistic classifier in its simplest form.', 'مصنّف احتمالي في أبسط صوره.'],
  46: ['Splits, Gini and entropy, and when to stop.', 'التقسيمات وجيني والإنتروبيا، ومتى تتوقف.'],
  47: ['Missing data and feature selection inside trees.', 'البيانات المفقودة واختيار الخصائص داخل الأشجار.'],
  48: ['The same tree idea with a numeric target.', 'الفكرة نفسها بشجرة ذات هدف رقمي.'],
  49: ['Pruning: how to stop a tree from memorising.', 'التقليم: كيف تمنع الشجرة من الحفظ.'],
  50: ['One-hot, label, target and K-fold target encoding.', 'الترميز الأحادي والوسمي والهدفي وK-fold.'],
  51: ['A full classification tree, built in Python.', 'شجرة تصنيف كاملة، مبنية بلغة بايثون.'],
  52: ['Bootstrap samples plus random feature subsets.', 'عينات الإقلاع مع مجموعات خصائص عشوائية.'],
  53: ['Missing data and clustering with forests.', 'البيانات المفقودة والتجميع بالغابات.'],
  55: ['The chain rule, the prerequisite for backprop.', 'قاعدة السلسلة، شرط الانتشار العكسي.'],
  56: ['Gradient descent: the step, the rate, the convergence.', 'النزول التدرجي: الخطوة، المعدل، التقارب.'],
  57: ['Stochastic gradient descent and mini-batches.', 'النزول التدرجي العشوائي والدفعات الصغيرة.'],
  58: ['AdaBoost, the original boosting algorithm.', 'AdaBoost، خوارزمية التعزيز الأصلية.'],
  59: ['Gradient Boost 1/4: regression, main ideas.', 'Gradient Boost 1/4: الانحدار، الأفكار الأساسية.'],
  60: ['Gradient Boost 2/4: regression details.', 'Gradient Boost 2/4: تفاصيل الانحدار.'],
  61: ['Gradient Boost 3/4: classification.', 'Gradient Boost 3/4: التصنيف.'],
  62: ['Gradient Boost 4/4: classification details.', 'Gradient Boost 4/4: تفاصيل التصنيف.'],
  64: ['XGBoost 1/4: regression.', 'XGBoost 1/4: الانحدار.'],
  65: ['XGBoost 2/4: classification.', 'XGBoost 2/4: التصنيف.'],
  66: ['XGBoost 3/4: the mathematics.', 'XGBoost 3/4: الرياضيات.'],
  67: ['XGBoost 4/4: the optimisations.', 'XGBoost 4/4: التحسينات.'],
  68: ['XGBoost in Python, from start to finish.', 'XGBoost ببايثون، من البداية إلى النهاية.'],
  69: ['CatBoost 1/2: ordered target encoding.', 'CatBoost 1/2: ترميز الهدف المرتّب.'],
  70: ['CatBoost 2/2: building and using trees.', 'CatBoost 2/2: بناء الأشجار واستخدامها.'],
  71: ['Cosine similarity: the measure behind recommendations.', 'تشابه جيب التمام: المقياس وراء التوصيات.'],
  72: ['Margin, support vectors and the soft margin.', 'الهامش، المتجهات الداعمة، والهامش اللين.'],
  73: ['The polynomial kernel, drawn.', 'النواة متعددة الحدود، مرسومة.'],
  74: ['The RBF kernel, and why it bends space.', 'نواة RBF، ولماذا تحني الفضاء.'],
  75: ['An SVM in Python, from start to finish.', 'آلة متجهات داعمة ببايثون، من البداية إلى النهاية.'],
  76: ['Neural network basics, the ground under autoencoders.', 'أساسيات الشبكات العصبية، أرض المشفّرات التلقائية.'],
  98: ['PyTorch, where Adam and RMSprop are one line.', 'PyTorch، حيث Adam وRMSprop سطر واحد.'],
  103: ['Agent, environment, state, action, reward, policy.', 'الوكيل، البيئة، الحالة، الفعل، المكافأة، السياسة.'],
  104: ['Deep RL, the essential concepts.', 'التعلّم المعزّز العميق، المفاهيم الأساسية.'],
  105: ['Deep RL, the mathematical details.', 'التعلّم المعزّز العميق، التفاصيل الرياضية.'],
  106: ['RLHF, how reward shapes a language model.', 'RLHF، كيف تشكّل المكافأة نموذجًا لغويًا.'],
};

const v = (n, star = false) => ({ n, star });

export const CHAPTERS = [
  {
    id: 1,
    slug: 'introduction',
    coverage: 'covered',
    en: {
      title: 'Introduction and Fundamentals',
      short: 'Introduction',
      standfirst: 'What learning means, its four kinds, and the model underneath.',
      coverageNote: 'The map, the evaluation vocabulary and the Bayesian groundwork are here.',
      diagram: {
        title: 'The learning loop',
        intro: 'Every model in the course runs this loop, from a line to a forest.',
        points: [
          'The model makes a guess from the data it has.',
          'The loss measures the distance between the guess and the truth.',
          'The update moves the parameters, then the loop starts again.',
        ],
      },
    },
    ar: {
      title: 'مقدمة وأساسيات',
      short: 'المقدمة',
      standfirst: 'ما معنى التعلّم، وأنواعه الأربعة، والنموذج الذي يقف في الأساس.',
      coverageNote: 'الخريطة ومفردات التقييم وأساس بايز موجودة هنا.',
      diagram: {
        title: 'حلقة التعلّم',
        intro: 'كل نموذج في المقرر يدور في هذه الحلقة، من الخط إلى الغابة.',
        points: [
          'يقدّم النموذج تخمينًا انطلاقًا من البيانات التي لديه.',
          'تقيس الخسارة المسافة بين التخمين والحقيقة.',
          'يحرّك التحديث المعاملات، ثم تبدأ الحلقة من جديد.',
        ],
      },
    },
    lessons: [
      {
        id: '1.1',
        en: {
          title: 'Introduction to Machine Learning',
          bullets: [
            'Overview of machine learning',
            'Types: supervised, unsupervised, semi-supervised, reinforcement, self-learning',
            'Applications of machine learning',
          ],
          practical: 'Set up the development environment and implement simple linear regression.',
        },
        ar: {
          title: 'مقدمة في تعلّم الآلة',
          bullets: [
            'نظرة عامة على تعلّم الآلة',
            'الأنواع: الموجّه، غير الموجّه، شبه الموجّه، المعزّز، الذاتي',
            'تطبيقات تعلّم الآلة',
          ],
          practical: 'تهيئة بيئة التطوير وتنفيذ الانحدار الخطي البسيط.',
        },
        groups: [
          {
            en: 'Start here',
            ar: 'ابدأ من هنا',
            videos: [v(1, true), v(2, true), v(6, true), v(3), v(4), v(10, true)],
          },
        ],
      },
      {
        id: '1.2',
        en: {
          title: 'Probability and Statistics Refresher',
          bullets: [
            'Probability theory basics',
            'Random variables and distributions',
            'Bayesian thinking',
          ],
          practical: 'No separate practical; the probability returns in every model.',
        },
        ar: {
          title: 'مراجعة في الاحتمالات والإحصاء',
          bullets: [
            'أساسيات نظرية الاحتمالات',
            'المتغيرات العشوائية والتوزيعات',
            'التفكير البايزي',
          ],
          practical: 'لا عملًا عمليًا مستقلًا؛ تعود الاحتمالات في كل نموذج.',
        },
        groups: [
          {
            en: 'Probability and Bayes',
            ar: 'الاحتمال وبايز',
            videos: [v(14, true), v(15), v(44, true), v(45), v(7), v(8)],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'supervised',
    coverage: 'covered',
    en: {
      title: 'Supervised Learning',
      short: 'Supervised',
      standfirst: 'The models that do the work: lines, trees, forests, boosting, margins.',
      coverageNote: 'Almost everything is here, except LightGBM and stacking.',
      diagram: {
        title: 'The bias-variance trade-off',
        intro: 'The one curve that explains why a better fit can be a worse model.',
        points: [
          'Left: the model is too simple, so it misses the pattern.',
          'Right: it memorises the noise, so it fails on new data.',
          'The middle is the work: enough flexibility, not more.',
        ],
      },
    },
    ar: {
      title: 'التعلّم الموجّه',
      short: 'الموجّه',
      standfirst: 'النماذج التي تقوم بالعمل: الخطوط، والأشجار، والغابات، والتعزيز، والهوامش.',
      coverageNote: 'كل شيء تقريبًا موجود، باستثناء LightGBM والتكديس.',
      diagram: {
        title: 'مقايضة التحيّز والتباين',
        intro: 'المنحنى الواحد الذي يفسّر لماذا قد يكون التلاؤم الأفضل نموذجًا أسوأ.',
        points: [
          'يسارًا: النموذج بسيط جدًا، فيفوّت النمط.',
          'يمينًا: يحفظ الضوضاء، فيفشل على بيانات جديدة.',
          'الوسط هو العمل: مرونة كافية، دون زيادة.',
        ],
      },
    },
    lessons: [
      {
        id: '2.1',
        en: {
          title: 'Linear Models and Regularization',
          bullets: [
            'Linear regression',
            'Logistic regression',
            'Regularization: Ridge (L2), Lasso (L1), Elastic Net',
            'Advanced: polynomial regression, interaction terms',
          ],
          practical: 'Implement and compare linear and logistic regression with regularization.',
        },
        ar: {
          title: 'النماذج الخطية والتنظيم',
          bullets: [
            'الانحدار الخطي',
            'الانحدار اللوجستي',
            'التنظيم: ريدج (L2)، لاسو (L1)، إيلاستيك نت',
            'متقدم: الانحدار متعدد الحدود وحدود التفاعل',
          ],
          practical: 'تنفيذ ومقارنة الانحدار الخطي واللوجستي مع التنظيم.',
        },
        groups: [
          {
            en: 'Linear regression',
            ar: 'الانحدار الخطي',
            videos: [v(9, true), v(10, true), v(11), v(13, true), v(12)],
          },
          {
            en: 'Logistic regression',
            ar: 'الانحدار اللوجستي',
            videos: [v(16, true), v(17, true), v(18), v(19), v(20), v(22), v(23, true), v(21)],
          },
          {
            en: 'Regularization',
            ar: 'التنظيم',
            videos: [v(25, true), v(26, true), v(27, true), v(28, true), v(29)],
          },
        ],
      },
      {
        id: '2.2',
        en: {
          title: 'Decision Trees and Ensemble Methods',
          bullets: [
            'Decision trees',
            'Bagging: random forests',
            'Boosting: GBM, AdaBoost, XGBoost, LightGBM, CatBoost',
            'Stacking and blending',
          ],
          practical: 'Implement and analyse decision trees and ensemble methods.',
        },
        ar: {
          title: 'أشجار القرار وطرق التجميع',
          bullets: [
            'أشجار القرار',
            'باغينغ: الغابات العشوائية',
            'التعزيز: GBM، AdaBoost، XGBoost، LightGBM، CatBoost',
            'التكديس والدمج',
          ],
          practical: 'تنفيذ وتحليل أشجار القرار وطرق التجميع.',
        },
        groups: [
          {
            en: 'Decision trees',
            ar: 'أشجار القرار',
            videos: [v(46, true), v(48, true), v(49, true), v(47), v(51)],
          },
          {
            en: 'Random forests',
            ar: 'الغابات العشوائية',
            videos: [v(52, true), v(53), v(54)],
          },
          {
            en: 'Boosting',
            ar: 'التعزيز',
            videos: [v(58, true), v(59, true), v(60, true), v(61, true), v(62), v(64, true), v(65), v(66), v(67), v(68), v(69, true), v(70)],
          },
        ],
      },
      {
        id: '2.3',
        en: {
          title: 'Support Vector Machines and Optimization',
          bullets: [
            'Introduction to support vector machines',
            'Kernel trick: linear, polynomial, RBF, sigmoid',
            'Optimization: SGD, Adam, RMSprop',
          ],
          practical: 'Implement an SVM and experiment with kernels and optimizers.',
        },
        ar: {
          title: 'آلات المتجهات الداعمة والتحسين',
          bullets: [
            'مقدمة في آلات المتجهات الداعمة',
            'حيلة النواة: خطية، متعددة الحدود، RBF، سيجمويد',
            'التحسين: النزول التدرجي العشوائي، Adam، RMSprop',
          ],
          practical: 'تنفيذ SVM وتجربة النوى والمحسّنات.',
        },
        groups: [
          {
            en: 'Support vector machines',
            ar: 'آلات المتجهات الداعمة',
            videos: [v(72, true), v(73, true), v(74, true), v(75), v(71)],
          },
          {
            en: 'Optimization',
            ar: 'التحسين',
            videos: [v(56, true), v(57, true), v(55), v(98)],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'unsupervised',
    coverage: 'partial',
    en: {
      title: 'Unsupervised Learning',
      short: 'Unsupervised',
      standfirst: 'Structure without labels: clusters, fewer axes, and the distances between points.',
      coverageNote: 'The algorithms are here; most of the evaluation metrics are not.',
      diagram: {
        title: 'K-means in three panels',
        intro: 'One pass of the algorithm, drawn instead of described.',
        points: [
          'Pick k centres. Give every point to its nearest centre.',
          'Move each centre to the mean of its points.',
          'Repeat until nothing moves. The answer depends on k and the start.',
        ],
      },
    },
    ar: {
      title: 'التعلّم غير الموجّه',
      short: 'غير الموجّه',
      standfirst: 'بنية بلا وسوم: عناقيد، ومحاور أقل، والمسافات بين النقاط.',
      coverageNote: 'الخوارزميات موجودة، لكن معظم مقاييس التقييم غير موجودة.',
      diagram: {
        title: 'K-means في ثلاث لوحات',
        intro: 'دورة واحدة من الخوارزمية، مرسومة بدلًا من وصفها.',
        points: [
          'اختر k مراكز. أعطِ كل نقطة أقرب مركز إليها.',
          'حرّك كل مركز إلى متوسط نقاطه.',
          'أعد حتى لا يتحرك شيء. تعتمد النتيجة على k ونقطة البداية.',
        ],
      },
    },
    lessons: [
      {
        id: '3.1',
        en: {
          title: 'Clustering',
          bullets: [
            'K-means clustering',
            'Hierarchical clustering (agglomerative, divisive)',
            'DBSCAN and OPTICS',
            'Metrics: silhouette, Davies-Bouldin, adjusted Rand index, mutual information',
          ],
          practical: 'Apply clustering algorithms to a dataset and analyse the results.',
        },
        ar: {
          title: 'التجميع',
          bullets: [
            'تجميع K-means',
            'التجميع الهرمي (التجميعي، التقسيمي)',
            'DBSCAN وOPTICS',
            'المقاييس: Silhouette، Davies-Bouldin، مؤشر Rand المعدل، المعلومات المتبادلة',
          ],
          practical: 'تطبيق خوارزميات التجميع على مجموعة بيانات وتحليل النتائج.',
        },
        groups: [
          {
            en: 'Three algorithms',
            ar: 'ثلاث خوارزميات',
            videos: [v(41, true), v(40, true), v(42, true), v(8)],
          },
        ],
      },
      {
        id: '3.2',
        en: {
          title: 'Dimensionality Reduction',
          bullets: [
            'Principal component analysis (PCA)',
            't-SNE',
            'Linear discriminant analysis (LDA)',
            'Independent component analysis (ICA)',
            'Advanced: UMAP, factor analysis',
          ],
          practical: 'Apply dimensionality reduction to high-dimensional data.',
        },
        ar: {
          title: 'تقليل الأبعاد',
          bullets: [
            'تحليل المكونات الرئيسية (PCA)',
            't-SNE',
            'تحليل التمييز الخطي (LDA)',
            'تحليل المكونات المستقلة (ICA)',
            'متقدم: UMAP، تحليل العوامل',
          ],
          practical: 'تطبيق تقليل الأبعاد على بيانات عالية الأبعاد.',
        },
        groups: [
          {
            en: 'PCA',
            ar: 'PCA',
            videos: [v(31, true), v(30, true), v(32), v(34), v(33)],
          },
          {
            en: 'LDA, t-SNE and distances',
            ar: 'LDA وt-SNE والمسافات',
            videos: [v(35, true), v(39, true), v(37), v(38)],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'specialized',
    coverage: 'none',
    en: {
      title: 'Specialized Techniques',
      short: 'Specialized',
      standfirst: 'Two specialist families: probability graphs, and search borrowed from evolution.',
      coverageNote: 'The playlist gives the Bayesian groundwork, not the networks or the genetic algorithms.',
      diagram: {
        title: 'A Bayesian network',
        intro: 'Three variables, two causes, one graph you can reason with.',
        points: [
          'An arrow means “influences”, not “causes everything”.',
          'The graph lets you ask for a probability after seeing evidence.',
          'Structure learning is the hard part: the arrows are usually not given.',
        ],
      },
    },
    ar: {
      title: 'تقنيات متخصصة',
      short: 'متخصصة',
      standfirst: 'عائلتان متخصصتان: شبكات احتمالية، وبحث مستعار من التطور.',
      coverageNote: 'تقدّم القائمة أساس بايز، لا الشبكات ولا الخوارزميات الجينية.',
      diagram: {
        title: 'شبكة بايزية',
        intro: 'ثلاثة متغيرات، سببان، ورسم يمكنك الاستدلال به.',
        points: [
          'السهم يعني «يؤثر»، لا «يسبب كل شيء».',
          'يتيح الرسم طلب احتمال بعد رؤية دليل.',
          'تعلّم البنية هو الجزء الصعب: الأسهم عادة غير معطاة.',
        ],
      },
    },
    lessons: [
      {
        id: '4.1',
        en: {
          title: 'Bayesian Networks and Gaussian Processes',
          bullets: [
            'Introduction to Bayesian networks',
            'Structure learning and parameter learning',
            'Gaussian processes: regression and classification',
            'Applications and examples',
          ],
          practical: 'Implement a Bayesian network for a given dataset.',
        },
        ar: {
          title: 'الشبكات البايزية والعمليات الغاوسية',
          bullets: [
            'مقدمة في الشبكات البايزية',
            'تعلّم البنية وتعلّم المعاملات',
            'العمليات الغاوسية: الانحدار والتصنيف',
            'التطبيقات والأمثلة',
          ],
          practical: 'تنفيذ شبكة بايزية لمجموعة بيانات معطاة.',
        },
        groups: [
          {
            en: 'Groundwork only',
            ar: 'الأساس فقط',
            videos: [v(44, true), v(45), v(16)],
          },
        ],
      },
      {
        id: '4.2',
        en: {
          title: 'Genetic Algorithms and Belief Functions',
          bullets: [
            'Introduction to genetic algorithms',
            'Fitness, selection, crossover, mutation',
            'Belief functions and Dempster-Shafer theory',
            'Applications in optimization and uncertainty',
          ],
          practical: 'Solve an optimization problem with a genetic algorithm.',
        },
        ar: {
          title: 'الخوارزميات الجينية ودوال الاعتقاد',
          bullets: [
            'مقدمة في الخوارزميات الجينية',
            'اللياقة، الانتخاب، التزاوج، الطفرة',
            'دوال الاعتقاد ونظرية ديمبستر-شيفر',
            'تطبيقات في التحسين ونمذجة عدم اليقين',
          ],
          practical: 'حل مسألة تحسين بخوارزمية جينية.',
        },
        groups: [
          {
            en: 'One contrast to hold on to',
            ar: 'مقارنة واحدة تُمسك بها',
            videos: [v(56)],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'semi-supervised-and-rl',
    coverage: 'partial',
    en: {
      title: 'Semi-Supervised and Reinforcement Learning',
      short: 'Semi-supervised, RL',
      standfirst: 'Learning from a little supervision, and learning from reward.',
      coverageNote: 'The RL concepts are covered; semi-supervision and the RL algorithms are not.',
      diagram: {
        title: 'The agent loop',
        intro: 'Reinforcement learning is a conversation with an environment.',
        points: [
          'The agent takes an action in a state.',
          'The environment answers with a new state and a reward.',
          'The policy changes so that better rewards become more likely.',
        ],
      },
    },
    ar: {
      title: 'التعلّم شبه الموجّه والتعلّم المعزّز',
      short: 'شبه موجّه، معزّز',
      standfirst: 'التعلّم من إشراف قليل، والتعلّم من المكافأة.',
      coverageNote: 'مفاهيم التعلّم المعزّز موجودة، أما التعلّم شبه الموجّه وخوارزمياته فغير موجودة.',
      diagram: {
        title: 'حلقة الوكيل',
        intro: 'التعلّم المعزّز حوار مع بيئة.',
        points: [
          'يتخذ الوكيل فعلًا في حالة ما.',
          'تجيب البيئة بحالة جديدة ومكافأة.',
          'تتغيّر السياسة لتصبح المكافآت الأفضل أكثر احتمالًا.',
        ],
      },
    },
    lessons: [
      {
        id: '5.1',
        en: {
          title: 'Semi-Supervised Learning',
          bullets: [
            'Introduction to semi-supervised learning',
            'Self-training and co-training',
            'Generative models for semi-supervised learning',
            'Semi-supervised SVMs',
          ],
          practical: 'Implement a semi-supervised algorithm on a partially labelled dataset.',
        },
        ar: {
          title: 'التعلّم شبه الموجّه',
          bullets: [
            'مقدمة في التعلّم شبه الموجّه',
            'التدريب الذاتي والتدريب المشترك',
            'النماذج التوليدية للتعلّم شبه الموجّه',
            'آلات المتجهات الداعمة شبه الموجّهة',
          ],
          practical: 'تنفيذ خوارزمية شبه موجّهة على بيانات موسومة جزئيًا.',
        },
        groups: [
          {
            en: 'Prerequisites',
            ar: 'متطلبات سابقة',
            videos: [v(72), v(45)],
          },
        ],
      },
      {
        id: '5.2',
        en: {
          title: 'Reinforcement Learning',
          bullets: [
            'Fundamentals of reinforcement learning',
            'Markov decision processes',
            'Q-learning and SARSA',
            'Policy gradient methods',
            'Applications: games and robotics',
          ],
          practical: 'Implement Q-learning for a simple game environment.',
        },
        ar: {
          title: 'التعلّم المعزّز',
          bullets: [
            'أساسيات التعلّم المعزّز',
            'عمليات قرار ماركوف',
            'Q-Learning وSARSA',
            'طرق تدرج السياسة',
            'تطبيقات: الألعاب والروبوتات',
          ],
          practical: 'تنفيذ Q-Learning لبيئة لعبة بسيطة.',
        },
        groups: [
          {
            en: 'Concepts and deep RL',
            ar: 'المفاهيم والتعلّم العميق',
            videos: [v(103, true), v(104), v(105), v(106)],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'features-and-anomalies',
    coverage: 'partial',
    en: {
      title: 'Feature Engineering and Anomaly Detection',
      short: 'Features, anomalies',
      standfirst: 'Clean features first, then the rows that do not belong.',
      coverageNote: 'Encoding and selection are here; RFE and most anomaly algorithms are not.',
      diagram: {
        title: 'The confusion matrix',
        intro: 'Two ways to be right, two ways to be wrong, and the four numbers behind every metric.',
        points: [
          'True positives and true negatives are the wins.',
          'False positives and false negatives cost differently in every problem.',
          'Accuracy hides that difference. Precision and recall do not.',
        ],
      },
    },
    ar: {
      title: 'هندسة الخصائص وكشف الشذوذ',
      short: 'الخصائص، الشذوذ',
      standfirst: 'الميزات النظيفة أولًا، ثم الصفوف التي لا تنتمي.',
      coverageNote: 'الترميز والاختيار موجودان، أما RFE ومعظم خوارزميات الشذوذ فغير موجودة.',
      diagram: {
        title: 'مصفوفة الارتباك',
        intro: 'طريقتان للصواب، وطريقتان للخطأ، وأربعة أرقام وراء كل مقياس.',
        points: [
          'الإيجابيات والسلبيات الصحيحة هي المكاسب.',
          'تكلفة الإيجابية الكاذبة والسلبية الكاذبة تختلف في كل مسألة.',
          'الدقة الكلية تخفي الفرق، بينما الإحكام والاستدعاء يكشفانه.',
        ],
      },
    },
    lessons: [
      {
        id: '6.1',
        en: {
          title: 'Feature Engineering and Preprocessing',
          bullets: [
            'Data preprocessing',
            'Feature scaling and normalization',
            'Missing values and categorical data',
            'Selection: recursive feature elimination, SelectKBest, L1',
            'Extraction: PCA, LDA, t-SNE',
          ],
          practical: 'Clean and preprocess a real-world dataset.',
        },
        ar: {
          title: 'هندسة الخصائص والمعالجة المسبقة',
          bullets: [
            'معالجة البيانات المسبقة',
            'تحجيم الخصائص وتطبيعها',
            'القيم المفقودة والبيانات الفئوية',
            'الاختيار: الإقصاء العودي للخصائص، SelectKBest، L1',
            'الاستخلاص: PCA، LDA، t-SNE',
          ],
          practical: 'تنظيف ومعالجة مجموعة بيانات حقيقية.',
        },
        groups: [
          {
            en: 'Encoding and selection',
            ar: 'الترميز والاختيار',
            videos: [v(50, true), v(47, true), v(25), v(26, true), v(7), v(8, true)],
          },
          {
            en: 'Extraction',
            ar: 'الاستخلاص',
            videos: [v(32), v(30), v(35), v(39)],
          },
        ],
      },
      {
        id: '6.2',
        en: {
          title: 'Anomaly Detection',
          bullets: [
            'Types: point, contextual, collective',
            'Statistical: Z-score, Grubbs’ test',
            'Machine learning: Isolation Forest, One-Class SVM, LOF, autoencoders',
            'Metrics: precision at N, ROC, AUC, F1 for imbalance',
          ],
          practical: 'Detect anomalies in a dataset with different methods.',
        },
        ar: {
          title: 'كشف الشذوذ',
          bullets: [
            'الأنواع: نقطية، سياقية، جماعية',
            'إحصائية: Z-score، اختبار Grubbs',
            'تعلّم الآلة: Isolation Forest، One-Class SVM، LOF، المشفّرات التلقائية',
            'المقاييس: الإحكام عند N، ROC، AUC، F1 للبيانات غير المتوازنة',
          ],
          practical: 'كشف الشذوذ في مجموعة بيانات بطرق مختلفة.',
        },
        groups: [
          {
            en: 'Distance and evaluation',
            ar: 'المسافة والتقييم',
            videos: [v(43, true), v(42), v(72), v(74), v(23, true), v(3), v(5), v(76)],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    slug: 'recommenders',
    coverage: 'none',
    en: {
      title: 'Recommender Systems and Association Rules',
      short: 'Recommenders',
      standfirst: 'Ratings that become factors, baskets that become rules.',
      coverageNote: 'Only cosine similarity overlaps; the rest is course material.',
      diagram: {
        title: 'Matrix factorisation',
        intro: 'Fill an empty rating matrix with a few hidden tastes.',
        points: [
          'Users rate a few items; most cells are empty.',
          'The matrix becomes two thin matrices: one taste vector per user, one per item.',
          'A missing rating is the dot product of the two vectors.',
        ],
      },
    },
    ar: {
      title: 'أنظمة التوصية وقواعد الارتباط',
      short: 'التوصية',
      standfirst: 'تقييمات تصبح عوامل، وسلال تصبح قواعد.',
      coverageNote: 'لا يتقاطع إلا تشابه جيب التمام، والباقي من المقرر.',
      diagram: {
        title: 'تحليل المصفوفات',
        intro: 'املأ مصفوفة تقييمات فارغة بقليل من الأذواق الخفية.',
        points: [
          'يقيّم المستخدمون عناصر قليلة؛ معظم الخلايا فارغة.',
          'تتحول المصفوفة إلى مصفوفتين رفيعتين: متجه ذوق لكل مستخدم، ومتجه لكل عنصر.',
          'التقييم المفقود هو الجداء النقطي للمتجهين.',
        ],
      },
    },
    lessons: [
      {
        id: '7.1',
        en: {
          title: 'Recommender Systems',
          bullets: [
            'Content-based filtering',
            'Collaborative filtering: user-based and item-based',
            'Matrix factorization: SVD, ALS, NMF',
            'Hybrid methods',
            'Metrics: MAE, RMSE, precision at K, MRR, NDCG',
          ],
          practical: 'Build a simple recommender with collaborative filtering and matrix factorization.',
        },
        ar: {
          title: 'أنظمة التوصية',
          bullets: [
            'الترشيح القائم على المحتوى',
            'الترشيح التعاوني: حسب المستخدم وحسب العنصر',
            'تحليل المصفوفات: SVD، ALS، NMF',
            'الطرق الهجينة',
            'المقاييس: MAE، RMSE، الإحكام عند K، MRR، NDCG',
          ],
          practical: 'بناء نظام توصية بسيط بالترشيح التعاوني وتحليل المصفوفات.',
        },
        groups: [
          {
            en: 'The one overlapping idea',
            ar: 'الفكرة المتقاطعة الوحيدة',
            videos: [v(71, true), v(10)],
          },
        ],
      },
      {
        id: '7.2',
        en: {
          title: 'Association Rule Learning',
          bullets: [
            'Market basket analysis',
            'Apriori',
            'Eclat',
            'FP-Growth',
            'Metrics: support, confidence, lift, conviction',
          ],
          practical: 'Implement and analyse association rules on transactional data.',
        },
        ar: {
          title: 'تعلّم قواعد الارتباط',
          bullets: [
            'تحليل سلة السوق',
            'Apriori',
            'Eclat',
            'FP-Growth',
            'المقاييس: الدعم، الثقة، الرفع، الاقتناع',
          ],
          practical: 'تنفيذ وتحليل قواعد الارتباط على بيانات المعاملات.',
        },
        groups: [],
      },
    ],
  },
  {
    id: 8,
    slug: 'privacy-and-ethics',
    coverage: 'none',
    en: {
      title: 'Privacy and Ethics',
      short: 'Privacy, ethics',
      standfirst: 'Where the data lives, who it harms, and how it ships.',
      coverageNote: 'Nothing in the playlist covers this chapter.',
      diagram: {
        title: 'Federated averaging',
        intro: 'Train where the data already is, then move only the weights.',
        points: [
          'Each device trains a local copy on its own data.',
          'Only the model weights travel to the server.',
          'The server averages the weights into one global model, and sends it back.',
        ],
      },
    },
    ar: {
      title: 'الخصوصية والأخلاقيات',
      short: 'الخصوصية، الأخلاقيات',
      standfirst: 'أين تعيش البيانات، ومن تتضرر، وكيف تُنشر.',
      coverageNote: 'لا شيء في القائمة يغطي هذا الفصل.',
      diagram: {
        title: 'المتوسط الفيدرالي',
        intro: 'درّب حيث توجد البيانات، ثم انقل الأوزان فقط.',
        points: [
          'يتدرّب كل جهاز على نسخة محلية ببياناته.',
          'تنتقل أوزان النموذج فقط إلى الخادم.',
          'يجمع الخادم الأوزان في نموذج عالمي واحد، ثم يعيده.',
        ],
      },
    },
    lessons: [
      {
        id: '8.1',
        en: {
          title: 'Federated Learning and Ethical Considerations',
          bullets: [
            'Introduction to federated learning',
            'Federated averaging',
            'Privacy: differential privacy, secure multiparty computation',
            'Ethics: bias, fairness, accountability',
            'Interpretability: SHAP, LIME, fairness-aware ML',
            'Deployment: model serving, A/B testing, CI/CD for ML',
          ],
          practical: 'Implement a simple federated learning system.',
        },
        ar: {
          title: 'التعلّم الفيدرالي والاعتبارات الأخلاقية',
          bullets: [
            'مقدمة في التعلّم الفيدرالي',
            'المتوسط الفيدرالي',
            'الخصوصية: الخصوصية التفاضلية، الحساب الآمن متعدد الأطراف',
            'الأخلاقيات: التحيّز، الإنصاف، المساءلة',
            'التفسيرية: SHAP، LIME، التعلّم المراعي للإنصاف',
            'النشر: خدمة النماذج، اختبار A/B، التكامل والتسليم المستمر لتعلّم الآلة',
          ],
          practical: 'تنفيذ نظام تعلّم فيدرالي بسيط.',
        },
        groups: [],
      },
    ],
  },
];

// The home page's honest gaps table.
export const GAPS = [
  {
    chapter: 4,
    en: 'Genetic algorithms, belief functions',
    ar: 'الخوارزميات الجينية، دوال الاعتقاد',
    noteEn: 'Search, selection, crossover, mutation',
    noteAr: 'بحث، انتخاب، تزاوج، طفرة',
  },
  {
    chapter: 5,
    en: 'Semi-supervised learning',
    ar: 'التعلّم شبه الموجّه',
    noteEn: 'Self-training, co-training, semi-supervised SVM',
    noteAr: 'التدريب الذاتي، التدريب المشترك، SVM شبه موجّه',
  },
  {
    chapter: 5,
    en: 'Q-learning, SARSA, policy gradients',
    ar: 'Q-Learning وSARSA وتدرج السياسة',
    noteEn: 'The playlist stops at the concepts',
    noteAr: 'تتوقف القائمة عند المفاهيم',
  },
  {
    chapter: 7,
    en: 'Association rules',
    ar: 'قواعد الارتباط',
    noteEn: 'Apriori, Eclat, FP-Growth, lift',
    noteAr: 'Apriori، Eclat، FP-Growth، الرفع',
  },
  {
    chapter: 7,
    en: 'Recommendation metrics',
    ar: 'مقاييس التوصية',
    noteEn: 'Precision at K, MRR, NDCG',
    noteAr: 'الإحكام عند K، MRR، NDCG',
  },
  {
    chapter: 8,
    en: 'Federated learning, SHAP, LIME',
    ar: 'التعلّم الفيدرالي، SHAP، LIME',
    noteEn: 'Privacy, fairness, deployment',
    noteAr: 'الخصوصية، الإنصاف، النشر',
  },
];
