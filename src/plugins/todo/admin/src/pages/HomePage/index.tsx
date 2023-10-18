/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
import { Layout, BaseHeaderLayout, ContentLayout, EmptyStateLayout, Button } from "@strapi/design-system";
import { Plus } from "@strapi/icons";
import AddModal from "../../components/AddModal";
import TodoCount from "../../components/Count";
import TodoTable from "../../components/List";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import * as todoApi from "../../api/todo";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    const data = await todoApi.getAll();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const create = async (data: object) => {
    await todoApi.create(data);
    await fetchData();
  };

  const toggle = async (id: string) => {
    await todoApi.toggle(id);
  };

  const remove = async (todo: any) => {
    await todoApi.remove(todo.id);
    await fetchData();
  };

  const update = async (id: string, data: object) => {
    await todoApi.update(id, data);
    await fetchData();
  };

  if (isLoading) {
    return <LoadingIndicatorPage />;
  }

  return (
    <Layout>
      <BaseHeaderLayout title="Todo Plugin" subtitle="All your toods in one place" as="h2"></BaseHeaderLayout>
      <ContentLayout>
        {!!data.length ? (
          <>
            <TodoCount count={data.length} />
            <TodoTable
              todoData={data}
              setShowModal={setShowModal}
              toggleTodo={toggle}
              deleteTodo={remove}
              editTodo={update}
            />
          </>
        ) : (
          <EmptyStateLayout
            content="You don't have any todos yet.."
            action={
              <Button
                variant="secondary"
                startIcon={<Plus />}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Add your first todo..
              </Button>
            }
          ></EmptyStateLayout>
        )}
      </ContentLayout>
      {showModal && <AddModal setShowModal={setShowModal} addTodo={create} />}
    </Layout>
  );
};

export default HomePage;
