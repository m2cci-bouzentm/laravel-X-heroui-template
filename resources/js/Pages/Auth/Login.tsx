import React, { FormEventHandler, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Checkbox } from '@heroui/checkbox';
import { title } from '@/components/primitives';
type LoginFormData = {
    email: string;
    password: string;
    remember: boolean;
};

type LoginProps = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<LoginFormData>({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <Head title="Log in" />

            <div className="w-full sm:max-w-md mt-6 px-6 py-4">
                <Card className="w-full">
                    <CardHeader className="flex flex-col gap-3 items-center">
                        <h1 className={title({ size: "sm" })}>Login</h1>
                        <p className="text-default-600">Sign in to your account</p>
                    </CardHeader>
                    <CardBody>
                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-6">
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
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                label="Password"
                                isRequired
                                errorMessage={errors.password}
                                isInvalid={!!errors.password}
                            />

                            <div className="block mt-4">
                                <Checkbox
                                    name="remember"
                                    isSelected={data.remember}
                                    onValueChange={(checked) => setData('remember', checked)}
                                >
                                    Remember me
                                </Checkbox>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex flex-col gap-2">
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}
                                    <Link
                                        href={route('register')}
                                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                    >
                                        Don't have an account?
                                    </Link>
                                </div>

                                <Button 
                                    type="submit" 
                                    color="primary"
                                    isLoading={processing}
                                    disabled={processing}
                                >
                                    Log in
                                </Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
} 