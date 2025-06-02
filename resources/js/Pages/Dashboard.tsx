import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@heroui/button';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';

type DashboardProps = {
    auth: {
        user: {
            name: string;
            email: string;
        }
    }
};

export default function Dashboard({ auth }: DashboardProps) {
    const { post } = useForm();

    const logout = () => {
        post(route('logout'));
    };

    return (
        <DefaultLayout>
            <Head title="Dashboard" />
            
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Dashboard</h1>
                    <p className="text-default-600 mt-4">Welcome back, {auth.user.name}!</p>
                </div>
                
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <h2 className="text-xl font-semibold">User Information</h2>
                    </CardHeader>
                    <CardBody>
                        <div className="space-y-2">
                            <p><strong>Name:</strong> {auth.user.name}</p>
                            <p><strong>Email:</strong> {auth.user.email}</p>
                        </div>
                        
                        <div className="mt-6 flex gap-4">
                            <Button 
                                color="danger" 
                                variant="flat"
                                onPress={logout}
                            >
                                Logout
                            </Button>
                            <Link href="/">
                                <Button variant="bordered">
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </section>
        </DefaultLayout>
    );
} 