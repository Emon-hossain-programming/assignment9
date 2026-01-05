import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    const catsData = useLoaderData();
    return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        catsData.map(service => (
                            <div key={service.serviceId} className="card bg-base-100 shadow-xl border border-blue-50 transition-transform hover:scale-105">
                                <figure className="px-4 pt-4">
                                    <img src={service.image} alt={service.serviceName} className="rounded-xl h-52 w-full object-cover" />
                                </figure>
                                <div className="card-body">
                                    <div className="flex justify-between items-start ">
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
    );
};

export default Services;