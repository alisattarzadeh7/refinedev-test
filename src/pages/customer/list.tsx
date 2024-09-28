import {DateField, DeleteButton, EditButton, List, MarkdownField, ShowButton, useTable} from "@refinedev/antd";
import {Space, Table} from "antd";
import {BaseRecord, CanAccess, useList, useMany} from "@refinedev/core";
import React from "react";


const CustomerListPage = ()=>{

    const { tableProps } = useTable({
        syncWithLocation: true,
        pagination: { current: 1, pageSize: 10 },
    });



    return (

        <div>

            <CanAccess resource="user" action="readf">
                you have permission of user.read
            </CanAccess>
            <List>
                <Table {...tableProps}  rowKey="id">
                    <Table.Column dataIndex="id" title={"ID"} />
                    <Table.Column dataIndex="fullName" title={"fullName"} />

                    <Table.Column
                        title={"Actions"}
                        dataIndex="actions"
                        render={(_, record: BaseRecord) => (
                            <Space>
                                <EditButton hideText size="small" recordItemId={record.id} />
                                <ShowButton hideText size="small" recordItemId={record.id} />
                                <DeleteButton hideText size="small" recordItemId={record.id} />
                            </Space>
                        )}
                    />
                </Table>
            </List>
        </div>
    )
}



export default CustomerListPage