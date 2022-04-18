import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='flex justify-center mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
                <div className='w-3/4 h-3/4 shadow-lg bg-white flex flex-col items-center rounded-xl p-10'>
                    <div className='w-full px-4'>
                        <h2 className='text-2xl font-semibold mt-4 text-center'>Questions:</h2>
                        <h3 className='text-lg font-semibold mt-4'>
                            1. Difference between authorization and authentication. :
                        </h3>
                        <h4 className='text-lg mt-2'> <span className='font-semibold'>
                            Answer: </span><ul>
                                <li>1. Authentication is used to verifies user identity.</li>
                                <li>2. Its check if users is valid user not not.</li>
                                <li>3. Authorization check if users have permits to use data.</li>
                                <li>4. It verity user access to use data.</li>
                            </ul>
                        </h4>
                        <h3 className='text-lg font-semibold mt-4'> 2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <h4 className='text-lg mt-2'> <span className='font-semibold'>Answer: </span>
                            <ul>
                                <li>Firebase is helpful for realtime database, cloud storage, machine learning, hosting, etc.</li>
                                <li>
                                    But I am using firebase for implementing authentication  system to verifies user identity and hosting.
                                </li>
                                <li>Other options to implement authentication are: Okta, Auth0, OneLogin, JumpCloud, Microsoft Azure, Active Directory, CyberArk Identity, Rippling, SecureAuth Identity Platform, ForgeRock etc.
                                </li>
                            </ul> </h4>
                        <h3 className='text-lg font-semibold mt-4'>3. What other services does firebase provide other than authentication </h3>
                        <h4 className='text-lg mt-2'> <span className='font-semibold'>Answer: </span><ol>
                            Firebase provides hosted backend services such as:
                            <li>1. A realtime database</li>
                            <li>2. Cloud storage</li>
                            <li>3. Authentication</li>
                            <li>4. Crash reporting</li>
                            <li>5. Machine learning</li>
                            <li>6. Remote configuration</li>
                            <li>7. Hosting etc.</li>
                        </ol>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;