import { useTina, tinaField } from "tinacms/dist/react";

export const MyComponent = (props) => {
  const { data } = useTina(props);

  return (
    <div>
      <h1 data-tina-field={tinaField(data.post, "title")}>{data.post.title}</h1>
    </div>
    // <pre style={{ margin: "100px auto", width: "1000px" }}>
    //   {JSON.stringify(data?.post?.body, null, 2)}
    // </pre>
  );
};
