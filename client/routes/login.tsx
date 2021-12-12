import {
  Button,
  Checkbox,
  Form,
  Grid,
  Input,
  Typography,
} from '@arco-design/web-react';
import { useEffect } from 'react';
import { useSubmit, ActionFunction } from 'remix';
// import { Configuration, UsersApi } from '~/api';
import {
  CenterLayout,
  links as centerLayoutLinks,
} from '~/components/center-layout';

const FormItem = Form.Item;
const Row = Grid.Row;
const Col = Grid.Col;

export let links = () => {
  return [...centerLayoutLinks()];
};

export function loader() {
  return null;
}

export const action: ActionFunction = ({ request }) => {
  // await updatePreferences(await request.formData());
  // // return redirect("/prefs");
};

export default function Login() {
  // const handleSubmit = (data: any) => {
  //     new UsersApi(new Configuration({ basePath: 'http://localhost:5000/api' }))
  //     .test()
  //     .subscribe((v) => console.log(v));
  // };
  const submit = useSubmit();
  const handleSubmit = (data: { telephone: string; password: string }) => {
    submit(data);
  };

  // useEffect(() => {
  //   new UsersApi(new Configuration({ basePath: 'http://localhost:5000/api' }))
  //     .test()
  //     .subscribe((v) => console.log(v));
  // }, []);
  return (
    <CenterLayout>
      <div style={{ width: 600 }}>
        <Row justify="center">
          <Col offset={5} span={19}>
            <Typography.Title heading={3} style={{ textAlign: 'center' }}>
              用户登录
            </Typography.Title>
          </Col>
        </Row>
        <Form method="post" onSubmit={handleSubmit}>
          <FormItem label="手机号" field="telephone">
            <Input placeholder="请输入手机号" />
          </FormItem>
          <FormItem label="密码" field="password">
            <Input placeholder="请输入密码" />
          </FormItem>
          <FormItem wrapperCol={{ offset: 5 }}>
            <Checkbox>自动登录</Checkbox>
          </FormItem>
          <FormItem
            wrapperCol={{
              offset: 5,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    </CenterLayout>
  );
}
