import React, { FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { title } from '@/components/primitives';
type RegisterFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<RegisterFormData>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <Head title="Register" />
            
            <div className="w-full sm:max-w-md mt-6 px-6 py-4">
                <Card className="w-full">
                    <CardHeader className="flex flex-col gap-3 items-center">
                        <h1 className={title({ size: "sm" })}>Register</h1>
                        <p className="text-default-600">Create your account</p>
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={submit} className="space-y-6">
                            <Input
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                onChange={(e) => setData('name', e.target.value)}
                                label="Name"
                                isRequired
                                errorMessage={errors.name}
                                isInvalid={!!errors.name}
                            />

                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                label="Email"
                                isRequired
                                errorMessage={errors.email}
                                isInvalid={!!errors.email}
                            />

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                label="Password"
                                isRequired
                                errorMessage={errors.password}
                                isInvalid={!!errors.password}
                            />

                            <Input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                label="Confirm Password"
                                isRequired
                                errorMessage={errors.password_confirmation}
                                isInvalid={!!errors.password_confirmation}
                            />

                            <div className="flex items-center justify-between mt-4">
                                <Link
                                    href={route('login')}
                                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                >
                                    Already registered?
                                </Link>

                                <Button 
                                    type="submit" 
                                    color="primary"
                                    isLoading={processing}
                                    disabled={processing}
                                >
                                    Register
                                </Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
} 