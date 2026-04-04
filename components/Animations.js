'use client';
import PlantGrowthAnimation from './animations/PlantGrowthAnimation';
import WateringAnimation from './animations/WateringAnimation';
import LeafAnimation from './animations/LeafAnimation';

const animations = [
  {
    id: 1,
    title: 'Plant Growth',
    description: 'Watch your plants thrive with our nurturing care',
    component: PlantGrowthAnimation,
    color: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20',
    borderColor: 'border-green-200 dark:border-green-800'
  },
  {
    id: 2,
    title: 'Watering',
    description: 'Essential hydration for healthy, vibrant plants',
    component: WateringAnimation,
    color: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
    borderColor: 'border-blue-200 dark:border-blue-800'
  },
  {
    id: 3,
    title: 'Foliage',
    description: 'Beautiful leaves that bring life to any space',
    component: LeafAnimation,
    color: 'from-lime-50 to-green-50 dark:from-lime-950/20 dark:to-green-950/20',
    borderColor: 'border-lime-200 dark:border-lime-800'
  }
];

const Animations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Bringing Nature to Life
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our beautiful collection of animated plant experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {animations.map((animation) => {
            const AnimationComponent = animation.component;
            return (
              <div
                key={animation.id}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${animation.color} 
                  border-2 ${animation.borderColor} p-8 transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl`}
              >
                <div className="aspect-square w-full mb-6">
                  <AnimationComponent className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {animation.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {animation.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Animations Showcase */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              More Plant Delights
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Discover the magic of living greenery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { animation: PlantGrowthAnimation, size: 'h-48' },
              { animation: WateringAnimation, size: 'h-48' },
              { animation: LeafAnimation, size: 'h-48' },
              { animation: PlantGrowthAnimation, size: 'h-48' }
            ].map((item, index) => {
              const AnimationComponent = item.animation;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden 
                    hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`${item.size} flex items-center justify-center p-4`}>
                    <AnimationComponent className="w-full h-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Large Feature Animation */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-green-100 to-emerald-100 
          dark:from-green-900/30 dark:to-emerald-900/30 p-12 border border-green-300 dark:border-green-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Animated with Love
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our nursery brings the beauty of nature to life through carefully crafted 
                animations that showcase the journey from seedling to full bloom.
              </p>
              <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full 
                font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Explore Our Collection
              </button>
            </div>
            <div className="h-80 md:h-96">
              <PlantGrowthAnimation className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animations;
