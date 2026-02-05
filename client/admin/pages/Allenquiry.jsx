import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Tag,
  Space,
  Typography,
  Card,
  Badge,
  message,
  Divider,
  Popconfirm,
  Row,
  Col,
  Descriptions,
  DatePicker,
  Tooltip,
} from "antd";
import {
  EyeOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  HourglassOutlined,
  QuestionCircleOutlined,
  TagOutlined,
  DeleteOutlined,
  ReloadOutlined,
  DownloadOutlined,
  FilterOutlined,
  ClearOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  CarOutlined,
  GlobalOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import moment from "moment";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const AdminAllEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [remark, setRemark] = useState("");
  const [status, setStatus] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    showSizeChanger: true,
    showTotal: (total) => `Total ${total} enquiries`,
  });

  // Filter states
  const [filterName, setFilterName] = useState("");
  const [filterEmail, setFilterEmail] = useState("");
  const [filterPhone, setFilterPhone] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterDateRange, setFilterDateRange] = useState(null);
  const [filterEnquiryType, setFilterEnquiryType] = useState("");

  useEffect(() => {
    fetchAllEnquiries();
  }, []);

  useEffect(() => {
    applyFilters();
    // Reset to first page when filters change
    setPagination(prev => ({ ...prev, current: 1 }));
  }, [
    enquiries,
    filterName,
    filterEmail,
    filterPhone,
    filterStatus,
    filterDateRange,
    filterEnquiryType,
  ]);

  const fetchAllEnquiries = async () => {
    setLoading(true);
    try {
      const [
        contactResponse,
        hotelResponse,
        safariResponse,
        tourResponse,
        generalResponse,
      ] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_API_URL}/api/contactenquiry/`),
        axios.get(`${import.meta.env.VITE_APP_API_URL}/api/hotelenquiry`),
        axios.get(`${import.meta.env.VITE_APP_API_URL}/api/safarienquiry/`),
        axios.get(`${import.meta.env.VITE_APP_API_URL}/api/tour/tour-enquiries`),
        axios.get(`${import.meta.env.VITE_APP_API_URL}/api/general/all-enquiries`),
      ]);

      // Safely process Safari enquiries to prevent blank pages
      const processSafariEnquiries = (data) => {
        if (!data?.enquiries) return [];
        return data.enquiries.map(item => ({
          ...item,
          _id: item._id || Math.random().toString(),
          name: item.name || "N/A",
          email: item.email || "N/A",
          phone: item.phone || "N/A",
          status: item.status || "Pending",
          remark: item.remark || "No Remark",
          createdAt: item.createdAt || new Date().toISOString(),
          enquiryType: "Safari",
          typeIcon: <CarOutlined />,
        }));
      };

      const allEnquiries = [
        ...(contactResponse.data?.contacts || []).map(item => ({
          ...item,
          enquiryType: "Contact",
          typeIcon: <ContactsOutlined />,
        })),
        ...(hotelResponse.data || []).map(item => ({
          ...item,
          enquiryType: "Hotel",
          typeIcon: <HomeOutlined />,
        })),
        ...processSafariEnquiries(safariResponse.data),
        ...(tourResponse.data?.enquiries || []).map(item => ({
          ...item,
          enquiryType: "Tour",
          typeIcon: <GlobalOutlined />,
        })),
        ...(generalResponse.data?.enquiries || []).map(item => ({
          ...item,
          enquiryType: item.enquiryType || "General",
          typeIcon: <QuestionCircleOutlined />,
        })),
      ];

      setEnquiries(allEnquiries);
      setFilteredData(allEnquiries);
    } catch (error) {
      console.error("Error fetching all enquiries:", error);
      message.error("Failed to load enquiries");
    } finally {
      setLoading(false);
    }
  };

  const handleTableChange = (newPagination) => {
    setPagination({
      ...newPagination,
      current: newPagination.current,
      pageSize: newPagination.pageSize,
    });
  };

  const showModal = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setRemark(enquiry.remark || "");
    setStatus(enquiry.status || "Pending");
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdateEnquiry = async () => {
    if (!selectedEnquiry) return;

    try {
      let updateUrl = "";
      const updateData = { status, remark };

      switch (selectedEnquiry.enquiryType) {
        case "Contact":
          updateUrl = `${import.meta.env.VITE_APP_API_URL}/api/contactenquiry/update/${selectedEnquiry._id}`;
          break;
        case "Hotel":
          updateUrl = `${import.meta.env.VITE_APP_API_URL}/api/hotelenquiry/${selectedEnquiry._id}/status`;
          break;
        case "Safari":
          updateUrl = `${import.meta.env.VITE_APP_API_URL}/api/safarienquiry/update-status/${selectedEnquiry._id}`;
          break;
        case "Tour":
          updateUrl = `${import.meta.env.VITE_APP_API_URL}/api/tour/tour-enquiry/${selectedEnquiry._id}`;
          break;
        default:
          message.warning("Update not supported for this enquiry type");
          return;
      }

      await axios.put(updateUrl, updateData);
      message.success("Enquiry updated successfully!");
      fetchAllEnquiries();
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error updating enquiry:", error);
      message.error("Failed to update enquiry");
    }
  };

  const handleDeleteEnquiry = async (id, type) => {
    try {
      let deleteUrl = "";

      switch (type) {
        case "Contact":
          deleteUrl = `${import.meta.env.VITE_APP_API_URL}/api/contactenquiry/delete/${id}`;
          break;
        case "Hotel":
          deleteUrl = `${import.meta.env.VITE_APP_API_URL}/api/hotelenquiry/${id}`;
          break;
        case "Safari":
          deleteUrl = `${import.meta.env.VITE_APP_API_URL}/api/safarienquiry/${id}`;
          break;
        case "Tour":
          deleteUrl = `${import.meta.env.VITE_APP_API_URL}/api/tour/tour-enquiry/${id}`;
          break;
        default:
          message.warning("Delete not supported for this enquiry type");
          return;
      }

      await axios.delete(deleteUrl);
      message.success("Enquiry deleted successfully!");
      fetchAllEnquiries();
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error deleting enquiry:", error);
      message.error("Failed to delete enquiry");
    }
  };

  const applyFilters = () => {
    let results = [...enquiries];

    if (filterName) {
      results = results.filter((item) =>
        item.name?.toLowerCase().includes(filterName.toLowerCase())
      );
    }

    if (filterEmail) {
      results = results.filter((item) =>
        item.email?.toLowerCase().includes(filterEmail.toLowerCase())
      );
    }

    if (filterPhone) {
      results = results.filter((item) => 
        item.phone?.includes(filterPhone)
      );
    }

    if (filterStatus) {
      results = results.filter((item) => item.status === filterStatus);
    }

    if (filterEnquiryType) {
      results = results.filter((item) => item.enquiryType === filterEnquiryType);
    }

    if (filterDateRange && filterDateRange[0] && filterDateRange[1]) {
      const startDate = filterDateRange[0].startOf("day");
      const endDate = filterDateRange[1].endOf("day");

      results = results.filter((item) => {
        const itemDate = moment(item.createdAt);
        return (
          itemDate.isSameOrAfter(startDate) && itemDate.isSameOrBefore(endDate)
        );
      });
    }

    setFilteredData(results);
  };

  const clearFilters = () => {
    setFilterName("");
    setFilterEmail("");
    setFilterPhone("");
    setFilterStatus("");
    setFilterDateRange(null);
    setFilterEnquiryType("");
  };

  const downloadCSV = () => {
    const csvColumns = [
      "Date & Time",
      "Enquiry Type",
      "Name",
      "Email",
      "Phone",
      "Status",
      "Remark",
      "Details",
    ];

    const csvData = filteredData.map((item) => {
      let details = "";
      
      switch(item.enquiryType) {
        case "Contact":
          details = `Message: ${item.message || "N/A"}`;
          break;
        case "Hotel":
          details = `Hotel: ${item.hotelId?.title || "N/A"}, Message: ${item.message || "N/A"}`;
          break;
        case "Safari":
          details = `Zone: ${item.safariZone || "N/A"}, Vehicle: ${item.vehicleType || "N/A"}, Date: ${item.date ? moment(item.date).format("DD-MM-YYYY") : "N/A"}`;
          break;
        case "Tour":
          details = `Hotel: ${item.hotel?.title || "N/A"}, Package: ${item.package?.title || "N/A"}, Country: ${item.country || "N/A"}`;
          break;
        case "General":
          details = `Type: ${item.enquiryType || "N/A"}, Location: ${item.currentLocation || "N/A"}, Message: ${item.message || "N/A"}`;
          break;
        default:
          details = "N/A";
      }

      return {
        "Date & Time": moment(item.createdAt).format("DD-MM-YYYY hh:mm A"),
        "Enquiry Type": item.enquiryType,
        Name: item.name || "N/A",
        Email: item.email || "N/A",
        Phone: item.phone || "N/A",
        Status: item.status || "Pending",
        Remark: item.remark || "N/A",
        Details: details,
      };
    });

    const header = csvColumns.join(",");
    const rows = csvData.map((row) =>
      csvColumns
        .map((col) => {
          let value = row[col] || "";
          if (typeof value === "string" && (value.includes(",") || value.includes('"'))) {
            value = `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        })
        .join(",")
    );

    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", `all_enquiries_${moment().format("YYYY-MM-DD")}.csv`);
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    message.success("CSV file has been downloaded");
  };

  const getStatusInfo = (status) => {
    if (!status) return { color: "red", icon: <HourglassOutlined />, text: "Pending" };

    switch (status.toLowerCase()) {
      case "pending":
        return { color: "red", icon: <HourglassOutlined />, text: "Pending" };
      case "resolved":
      case "success":
        return { color: "green", icon: <CheckCircleOutlined />, text: status };
      case "not interested":
      case "not intrested":
      case "rejected":
        return { color: "orange", icon: <CloseCircleOutlined />, text: status };
      case "no response":
        return { color: "gray", icon: <QuestionCircleOutlined />, text: "No Response" };
      default:
        return { color: "blue", icon: <TagOutlined />, text: status };
    }
  };

  const columns = [
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => (
        <Text>{moment(createdAt).format("DD-MM-YYYY hh:mm A")}</Text>
      ),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
      title: "Enquiry Type",
      dataIndex: "enquiryType",
      key: "enquiryType",
      render: (type, record) => (
        <Tag icon={record.typeIcon} color={
          type === "Contact" ? "blue" : 
          type === "Hotel" ? "purple" : 
          type === "Safari" ? "orange" : 
          type === "Tour" ? "green" : "gray"
        }>
          {type}
        </Tag>
      ),
      filters: [
        { text: "Contact", value: "Contact" },
        { text: "Hotel", value: "Hotel" },
        { text: "Safari", value: "Safari" },
        { text: "Tour", value: "Tour" },
        { text: "General", value: "General" },
      ],
      onFilter: (value, record) => record.enquiryType === value,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <Text strong>{text || "N/A"}</Text>,
      sorter: (a, b) => (a.name || "").localeCompare(b.name || ""),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => text || "N/A",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text) => text || "N/A",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const { color, icon, text } = getStatusInfo(status);
        return (
          <Tag color={color} icon={icon}>
            {text}
          </Tag>
        );
      },
      filters: [
        { text: "Pending", value: "Pending" },
        { text: "Resolved", value: "Resolved" },
        { text: "Success", value: "Success" },
        { text: "Not Interested", value: "Not Interested" },
        { text: "No Response", value: "No Response" },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Tooltip title="View Details">
          <Button
            type="primary"
            icon={<EyeOutlined />}
            onClick={() => showModal(record)}
          />
        </Tooltip>
      ),
    },
  ];

  return (
    <Card
      title={
        <Title level={4} style={{ margin: 0 }}>
          <MailOutlined /> All Enquiries Management
        </Title>
      }
      extra={
        <Space>
          <Tooltip title="Toggle Filter Panel">
            <Button
              type={isFilterVisible ? "primary" : "default"}
              icon={<FilterOutlined />}
              onClick={() => setIsFilterVisible(!isFilterVisible)}
            >
              Filter
            </Button>
          </Tooltip>
          <Tooltip title="Download as CSV">
            <Button
              icon={<DownloadOutlined />}
              onClick={downloadCSV}
              disabled={filteredData.length === 0}
            >
              Export CSV
            </Button>
          </Tooltip>
          <Button
            type="primary"
            icon={<ReloadOutlined />}
            onClick={fetchAllEnquiries}
            loading={loading}
          >
            Refresh
          </Button>
        </Space>
      }
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}
    >
      {isFilterVisible && (
        <Card
          size="small"
          style={{ marginBottom: 16, background: "#f9f9f9" }}
          title="Filter Options"
          extra={
            <Button
              icon={<ClearOutlined />}
              onClick={clearFilters}
              size="small"
            >
              Clear Filters
            </Button>
          }
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item label="Name" style={{ marginBottom: 0 }}>
                <Input
                  placeholder="Filter by name"
                  value={filterName}
                  onChange={(e) => setFilterName(e.target.value)}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item label="Email" style={{ marginBottom: 0 }}>
                <Input
                  placeholder="Filter by email"
                  value={filterEmail}
                  onChange={(e) => setFilterEmail(e.target.value)}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item label="Phone" style={{ marginBottom: 0 }}>
                <Input
                  placeholder="Filter by phone"
                  value={filterPhone}
                  onChange={(e) => setFilterPhone(e.target.value)}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item label="Status" style={{ marginBottom: 0 }}>
                <Select
                  placeholder="Filter by status"
                  value={filterStatus}
                  onChange={(value) => setFilterStatus(value)}
                  allowClear
                  style={{ width: "100%" }}
                >
                  <Option value="Pending">Pending</Option>
                  <Option value="Resolved">Resolved</Option>
                  <Option value="Success">Success</Option>
                  <Option value="Not Interested">Not Interested</Option>
                  <Option value="No Response">No Response</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6}>
              <Form.Item label="Enquiry Type" style={{ marginBottom: 0 }}>
                <Select
                  placeholder="Filter by type"
                  value={filterEnquiryType}
                  onChange={(value) => setFilterEnquiryType(value)}
                  allowClear
                  style={{ width: "100%" }}
                >
                  <Option value="Contact">Contact</Option>
                  <Option value="Hotel">Hotel</Option>
                  <Option value="Safari">Safari</Option>
                  <Option value="Tour">Tour</Option>
                  <Option value="General">General</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Form.Item label="Date Range" style={{ marginBottom: 0 }}>
                <RangePicker
                  value={filterDateRange}
                  onChange={(dates) => setFilterDateRange(dates)}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      )}

      <div style={{ marginBottom: 16 }}>
        <Text type="secondary">
          {filteredData.length === enquiries.length
            ? `Showing all ${filteredData.length} enquiries`
            : `Found ${filteredData.length} matching enquiries out of ${enquiries.length} total`}
        </Text>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey={(record) => record._id || Math.random().toString()}
        loading={loading}
        pagination={pagination}
        onChange={handleTableChange}
        bordered
        size="middle"
        rowclassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        className="black-bordered-table"
      />

      <Modal
        title={
          <Space>
            <EyeOutlined />
            <span>Enquiry Details</span>
          </Space>
        }
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Popconfirm
            key="delete"
            title="Are you sure you want to delete this enquiry?"
            onConfirm={() => handleDeleteEnquiry(selectedEnquiry?._id, selectedEnquiry?.enquiryType)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />}>
              Delete Enquiry
            </Button>
          </Popconfirm>,
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="save"
            type="primary"
            icon={<CheckCircleOutlined />}
            onClick={handleUpdateEnquiry}
          >
            Save Changes
          </Button>,
        ]}
        width={700}
      >
        {selectedEnquiry && (
          <div className="black-bordered-descriptions">
            <Descriptions
              title="Customer Information"
              bordered
              column={{ xs: 1, sm: 2 }}
              style={{ marginBottom: "24px" }}
            >
              <Descriptions.Item label="Enquiry Type">
                <Tag icon={selectedEnquiry.typeIcon} color={
                  selectedEnquiry.enquiryType === "Contact" ? "blue" : 
                  selectedEnquiry.enquiryType === "Hotel" ? "purple" : 
                  selectedEnquiry.enquiryType === "Safari" ? "orange" : 
                  selectedEnquiry.enquiryType === "Tour" ? "green" : "gray"
                }>
                  {selectedEnquiry.enquiryType}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Customer Name">
                {selectedEnquiry.name || "N/A"}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {selectedEnquiry.email || "N/A"}
              </Descriptions.Item>
              <Descriptions.Item label="Phone">
                {selectedEnquiry.phone || "N/A"}
              </Descriptions.Item>
              <Descriptions.Item label="Date">
                {moment(selectedEnquiry.createdAt).format("DD-MM-YYYY hh:mm A")}
              </Descriptions.Item>
            </Descriptions>

            <Descriptions
              title="Enquiry Details"
              bordered
              column={{ xs: 1, sm: 2 }}
              style={{ marginBottom: "24px" }}
            >
              {selectedEnquiry.enquiryType === "Contact" && (
                <>
                  <Descriptions.Item label="Message" span={2}>
                    {selectedEnquiry.message || "N/A"}
                  </Descriptions.Item>
                </>
              )}

              {selectedEnquiry.enquiryType === "Hotel" && (
                <>
                  <Descriptions.Item label="Hotel">
                    {selectedEnquiry.hotelId?.title || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Message">
                    {selectedEnquiry.message || "N/A"}
                  </Descriptions.Item>
                </>
              )}

              {selectedEnquiry.enquiryType === "Safari" && (
                <>
                  <Descriptions.Item label="Safari Zone">
                    {selectedEnquiry.safariZone || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Vehicle Type">
                    {selectedEnquiry.vehicleType || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Safari Date">
                    {selectedEnquiry.date 
                      ? moment(selectedEnquiry.date).format("DD-MM-YYYY") 
                      : "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Safari Time">
                    {selectedEnquiry.safariTime || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Adults">
                    {selectedEnquiry.adults || 0}
                  </Descriptions.Item>
                  <Descriptions.Item label="Children">
                    {selectedEnquiry.childCount || 0}
                  </Descriptions.Item>
                  {selectedEnquiry.state && (
                    <Descriptions.Item label="State" span={2}>
                      <Tag color={selectedEnquiry.state === "MP" ? "blue" : "green"}>
                        {selectedEnquiry.state === "MP" ? "Madhya Pradesh" : "Maharashtra"}
                      </Tag>
                    </Descriptions.Item>
                  )}
                </>
              )}

              {selectedEnquiry.enquiryType === "Tour" && (
                <>
                  <Descriptions.Item label="Hotel">
                    {selectedEnquiry.hotel?.title || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Package">
                    {selectedEnquiry.package?.title || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Country">
                    {selectedEnquiry.country || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Message" span={2}>
                    {selectedEnquiry.message || "N/A"}
                  </Descriptions.Item>
                </>
              )}

              {selectedEnquiry.enquiryType === "General" && (
                <>
                  <Descriptions.Item label="Enquiry Type">
                    {selectedEnquiry.enquiryType || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Location">
                    {selectedEnquiry.currentLocation || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Message" span={2}>
                    {selectedEnquiry.message || "N/A"}
                  </Descriptions.Item>
                </>
              )}

              <Descriptions.Item label="Current Status">
                <Tag color={getStatusInfo(selectedEnquiry.status).color}>
                  {selectedEnquiry.status || "Pending"}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Current Remark">
                {selectedEnquiry.remark || "No remark added"}
              </Descriptions.Item>

              {(selectedEnquiry.logDetails || selectedEnquiry.device) && (
                <>
                  <Descriptions.Item label="IP Address">
                    {selectedEnquiry.logDetails?.ip || selectedEnquiry.ip || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Device">
                    {selectedEnquiry.logDetails?.device || selectedEnquiry.device || "N/A"}
                  </Descriptions.Item>
                  <Descriptions.Item label="Browser">
                    {selectedEnquiry.logDetails?.browser || selectedEnquiry.browser || "N/A"}
                  </Descriptions.Item>
                </>
              )}
            </Descriptions>

            <Divider style={{ margin: "16px 0" }} />

            <Form layout="vertical">
              <Form.Item label="Update Status" required>
                <Select
                  value={status}
                  onChange={(value) => setStatus(value)}
                  style={{ width: "100%" }}
                >
                  <Option value="Pending">
                    <Badge status="error" text="Pending" />
                  </Option>
                  <Option value="Resolved">
                    <Badge status="success" text="Resolved" />
                  </Option>
                  <Option value="Success">
                    <Badge status="success" text="Success" />
                  </Option>
                  <Option value="Not Interested">
                    <Badge status="warning" text="Not Interested" />
                  </Option>
                  <Option value="No Response">
                    <Badge status="default" text="No Response" />
                  </Option>
                </Select>
              </Form.Item>

              <Form.Item label="Update Remark">
                <TextArea
                  rows={4}
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  placeholder="Enter your remark or notes about this enquiry"
                  showCount
                  maxLength={500}
                />
              </Form.Item>
            </Form>
          </div>
        )}
      </Modal>

      <style jsx>{`
        .table-row-light {
          background-color: #ffffff;
        }
        .table-row-dark {
          background-color: #fafafa;
        }
        .black-bordered-table table {
          border: 1px solid #000 !important;
        }
        .black-bordered-table th,
        .black-bordered-table td {
          border: 1px solid #000 !important;
        }
        .black-bordered-descriptions table {
          border: 1px solid #000 !important;
        }
        .black-bordered-descriptions th,
        .black-bordered-descriptions td {
          border: 1px solid #000 !important;
        }
        .black-bordered-descriptions th {
          background-color: var(--bg-color) !important;
          color: #fff !important;
        }
        .black-bordered-table th {
          background-color: var(--bg-color) !important;
          color: #fff !important;
        }
        .black-bordered-table .ant-table-column-sorter {
          color: #fff;
        }

        .black-bordered-table
          .ant-table-column-sort
          .ant-table-column-sorter-up.active,
        .black-bordered-table
          .ant-table-column-sort
          .ant-table-column-sorter-down.active {
          color: #ff4d4f;
        }
      `}</style>
    </Card>
  );
};

export default AdminAllEnquiries;