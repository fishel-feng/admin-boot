import {
  Button,
  Checkbox,
  Form,
  Grid,
  Input,
  Typography,
} from '@arco-design/web-react';
import { ActionFunction, useSubmit } from 'remix';
// import { AccountsApi, Configuration, CreateAccountDto } from '~/api';
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

export const action: ActionFunction = async ({ request }) => {
  // await updatePreferences(await request.formData());
  // // return redirect("/prefs");
  // console.log(66666);
  // const data = await request.json();
  // console.log(request)
  // new AccountsApi(new Configuration({ basePath: 'http://localhost:5000/api' }))
  //   .accountsSignUp({ createAccountDto: data })
  //   .subscribe((v) => console.log(v));
  fetch('http://localhost:5000/api/accounts/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: request.body,
  });
  return null;
};

export default function SignUp() {
  const submit = useSubmit();
  const handleSubmit = (data: any) => {
    if (data.password !== data.repeat) {
      // 两次密码不一致
      return;
    }
    submit(
      {
        username: data.username,
        telephone: data.telephone,
        password: data.password,
        captcha: data.captcha,
      },
      {
        method: 'post',
      },
    );
    // encrypt
    // post data to server
    // if success link to index page
    // else toast message
  };

  return (
    <CenterLayout>
      <div style={{ width: 600 }}>
        <Row justify="center">
          <Col offset={5} span={19}>
            <Typography.Title heading={3} style={{ textAlign: 'center' }}>
              用户注册
            </Typography.Title>
          </Col>
        </Row>
        <Form method="post" onSubmit={handleSubmit}>
          <FormItem label="用户名" field="username">
            <Input placeholder="请输入用户名" />
          </FormItem>
          <FormItem label="密码" field="password">
            <Input placeholder="请输入密码" />
          </FormItem>
          <FormItem label="重复密码" field="repeat">
            <Input placeholder="请再次输入密码" />
          </FormItem>
          <FormItem label="手机号" field="telephone">
            <Input placeholder="请输入手机号" />
          </FormItem>
          <FormItem label="验证码" field="captcha">
            <Input
              placeholder="请输入验证码"
              suffix={
                <Button type="primary" shape="round" size="mini">
                  获取验证码
                </Button>
              }
            />
          </FormItem>

          <FormItem
            wrapperCol={{
              offset: 5,
              span: 19,
            }}
          >
            <Button style={{ width: '100%' }} type="primary" htmlType="submit">
              注册
            </Button>
          </FormItem>
        </Form>
      </div>
    </CenterLayout>
  );
}
