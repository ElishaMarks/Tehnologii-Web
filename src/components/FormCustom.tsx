import React, { useState } from 'react';
import { Form, Input, Checkbox, Button, message } from 'antd';

interface FieldType {
    username: string;
    email: string;
    password: string;
    remember: boolean;
}

const FormCustom: React.FC = () => {
    const [formDataCount, setFormDataCount] = useState(1);
    const [form] = Form.useForm();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedFormData, setEditedFormData] = useState<FieldType | null>(null);

    const onSubmit = () => {
        form.validateFields()
            .then(values => {
                let isDuplicate = false;
                const formDataKeys = Object.keys(localStorage);
                formDataKeys.forEach(key => {
                    const storedFormData = JSON.parse(localStorage.getItem(key) || '{}');
                    if (
                        storedFormData.username === values.username &&
                        storedFormData.email === values.email &&
                        storedFormData.password === values.password
                    ) {
                        isDuplicate = true;
                        return;
                    }
                });
                if (isDuplicate) {
                    message.error('Datele introduse sunt duplicate.');
                } else {
                    const currentCount = formDataCount + 1;
                    setFormDataCount(currentCount);
                    const formDataId = `formData${currentCount}`;
                    localStorage.setItem(formDataId, JSON.stringify(values));
                    message.success('Înregistrare reușită!');
                }
            })
            .catch(error => {
                message.error('Toate câmpurile sunt obligatorii.');
            });
    }

    const handleLogin = () => {
        const formDataKeys = Object.keys(localStorage);
        const username = form.getFieldValue('username');
        const password = form.getFieldValue('password');

        let isAuthenticated = false;

        formDataKeys.forEach(key => {
            const storedFormData = JSON.parse(localStorage.getItem(key) || '{}');
            if (storedFormData.username === username && storedFormData.password === password) {
                isAuthenticated = true;
                localStorage.setItem('auth', storedFormData.username);
                return;
            }
        });

        if (isAuthenticated) {
            message.success('Autentificare reușită!');
            setIsAuthenticated(true);
        } else {
            message.error('Autentificare nereușită!');
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('auth');
        setIsAuthenticated(false);
    }

    const handleEdit = () => {
        const editedFormDataCount = formDataCount;
        if (editedFormDataCount >= 0) {
            const storedFormData = JSON.parse(localStorage.getItem(`formData${editedFormDataCount}`) || '{}');
            setEditedFormData(storedFormData);
            setIsEditing(true);
        } else {
            message.warning('Nu există date anterioare disponibile pentru editare.');
        }
    }

    const handleUpdate = (values: FieldType) => {
        const editedFormDataCount = formDataCount;
        if (editedFormDataCount >= 0) {
            const formDataId = `formData${editedFormDataCount}`;
            localStorage.setItem(formDataId, JSON.stringify(values));
            message.success('Actualizare reușită!');
            setIsEditing(false);
        } else {
            message.warning('Nu există date anterioare disponibile pentru editare.');
        }
    }

    return (
        <div>
            {!isAuthenticated && (
                <Form form={form} onFinish={onSubmit}
                      name="basic"
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 16 }}
                      style={{ maxWidth: 600 }}
                      autoComplete="off"
                >
                    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Username-ul este obligatoriu' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Email-ul este obligatoriu' }]}>
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Parola este obligatorie' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">Register</Button>
                        <Button type="default" onClick={handleLogin} style={{ marginLeft: 8 }}>Login</Button>
                    </Form.Item>
                </Form>
            )}
            {isAuthenticated && (
                <div>
                    <p>Bine ai venit, {localStorage.getItem('auth')}!</p>
                    <Button type="default" onClick={handleLogout}>Logout</Button>
                    <Button type="default" onClick={handleEdit} style={{ marginLeft: 8 }}>Edit</Button>
                </div>
            )}
            {isEditing && (
                <Form
                    form={form}
                    onFinish={handleUpdate}
                    initialValues={editedFormData}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    autoComplete="off"
                >
                    <Form.Item label="Username" name="username">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">Update</Button>
                        <Button type="default" onClick={() => setIsEditing(false)} style={{ marginLeft: 8 }}>Cancel</Button>
                    </Form.Item>
                </Form>
            )}
        </div>
    );
}

export default FormCustom;
