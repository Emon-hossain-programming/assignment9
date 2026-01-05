import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const Home = () => {
    const catsData = useLoaderData();
    const UpdateData=catsData.slice(0,3)

    return (
        <div className="max-w-7xl mx-auto px-4">
             

            {/* 1. Hero Slider Section (DaisyUI Carousel) */}
            <div className="carousel w-full h-112.5 rounded-3xl my-8">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.pexels.com/photos/16652417/pexels-photo-16652417/free-photo-of-dog-wearing-jacket.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full object-cover" />
                    <div className="absolute flex flex-col items-center justify-center inset-0 bg-black/40 text-white text-center p-4">
                        <h2 className="text-5xl font-bold mb-4">Cozy Winter Pet Care</h2>
                        <p className="text-xl">Keep your furry friends warm and happy this winter season.</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                

            </div>

            {/* 2. Popular Winter Care Services Section */}
            <section className="my-16">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-blue-900">Popular Winter Care Services</h2>
                    <p className="text-gray-500 mt-2">Choose the best service for your pet's winter health.</p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        UpdateData.map(service => (
                            <div key={service.serviceId} className="card bg-base-100 shadow-xl border border-blue-50 transition-transform hover:scale-105">
                                <figure className="px-4 pt-4">
                                    <img src={service.image} alt={service.serviceName} className="rounded-xl h-52 w-full object-cover" />
                                </figure>
                                <div className="card-body">
                                    <div className="flex justify-between items-start">
                                        <h2 className="card-title text-xl font-bold">{service.serviceName}</h2>
                                        <div className="badge badge-secondary">★ {service.rating}</div>
                                    </div>
                                    <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
                                    
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-2xl font-bold text-primary">${service.price}</span>

                                        <Link 
                                            to={`/service/${service.serviceId}`} 
                                            className="btn btn-primary btn-sm text-white"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* 3. Extra Section: Winter Care Tips (Static) */}

            <section className="bg-blue-50 rounded-3xl p-10 mb-16">
                <h3 className="text-3xl font-bold text-center mb-8">Winter Care Tips for Pets</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <span className="text-4xl">🧣</span>
                        <h4 className="font-bold my-2">Layer Up</h4>
                        <p className="text-sm text-gray-500">Provide extra blankets or coats for short-haired breeds.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <span className="text-4xl">💧</span>
                        <h4 className="font-bold my-2">Hydration</h4>
                        <p className="text-sm text-gray-500">Make sure their water bowl doesn't freeze outdoors.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <span className="text-4xl">🐾</span>
                        <h4 className="font-bold my-2">Paw Care</h4>
                        <p className="text-sm text-gray-500">Wipe paws after walks to remove salt and ice chemicals.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;