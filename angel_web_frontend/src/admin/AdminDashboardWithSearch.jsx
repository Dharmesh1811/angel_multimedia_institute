import { useEffect, useMemo, useState } from 'react';
import { Search, Loader2, ArrowUpDown, ChevronUp, ChevronDown, Calendar } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export default function AdminDashboardWithSearch() {
  const [query, setQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/inquiries');
      const data = await response.json();
      setInquiries(data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const [sortConfig, setSortConfig] = useState({ key: 'created_at', direction: 'desc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedInquiries = useMemo(() => {
    let sortableInquiries = [...inquiries];
    if (sortConfig !== null) {
      sortableInquiries.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableInquiries;
  }, [inquiries, sortConfig]);

  const filteredInquiries = useMemo(() => {
    let result = [...sortedInquiries];

    // Apply Date Filter
    if (dateFilter !== 'all') {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      result = result.filter((i) => {
        const inquiryDate = new Date(i.created_at);
        const diffDays = Math.floor((today - new Date(inquiryDate.getFullYear(), inquiryDate.getMonth(), inquiryDate.getDate())) / (1000 * 60 * 60 * 24));

        if (dateFilter === 'today') return diffDays === 0;
        if (dateFilter === 'yesterday') return diffDays === 1;
        if (dateFilter === 'last7') return diffDays >= 0 && diffDays < 7;
        if (dateFilter === 'last30') return diffDays >= 0 && diffDays < 30;
        return true;
      });
    }

    // Apply Search Filter
    const q = query.trim().toLowerCase();
    if (!q) return result;
    return result.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.mobile.toLowerCase().includes(q) ||
        i.city.toLowerCase().includes(q) ||
        i.course.toLowerCase().includes(q) ||
        i.address.toLowerCase().includes(q)
    );
  }, [sortedInquiries, query, dateFilter]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Card className="border-purple-200/60">
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle className="text-2xl">Admin Dashboard</CardTitle>
            <CardDescription>Welcome! This is your admin panel.</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1 lg:flex-[1.5]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search inquiries..."
                  className="pl-9 border-purple-200/70 focus-visible:ring-purple-200 focus-visible:border-purple-300 h-11 bg-white"
                />
              </div>
            </div>
            <div className="w-full md:w-[220px]">
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="h-11 border-purple-200/70 bg-white focus:ring-purple-200 focus:border-purple-300 w-full">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    <SelectValue placeholder="Date Range" />
                  </div>
                </SelectTrigger>
                <SelectContent className="border-purple-100 shadow-xl">
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="last7">Last 7 Days</SelectItem>
                  <SelectItem value="last30">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Stats removed as requested */}

          <div className="mt-12">
            <h3 className="text-lg font-bold text-purple-800 mb-6">Recent Inquiries</h3>
            <div className="overflow-x-auto rounded-xl border border-purple-100">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 text-purple-600 animate-spin" />
                </div>
              ) : filteredInquiries.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground bg-purple-50/30">
                  No inquiries found matching your search.
                </div>
              ) : (
                <table className="w-full text-sm text-left">
                  <thead className="bg-purple-50 text-purple-800 uppercase text-xs font-bold">
                    <tr>
                      {[
                        { key: 'name', label: 'Name' },
                        { key: 'mobile', label: 'Contact' },
                        { key: 'city', label: 'City' },
                        { key: 'course', label: 'Course' },
                        { key: 'address', label: 'Address' },
                        { key: 'created_at', label: 'Date & Time' },
                      ].map((column) => (
                        <th
                          key={column.key}
                          className="px-6 py-4 cursor-pointer hover:bg-purple-100 transition-all duration-200 select-none group"
                          onClick={() => handleSort(column.key)}
                        >
                          <div className="flex items-center gap-2">
                            {column.label}
                            {sortConfig.key === column.key ? (
                              sortConfig.direction === 'asc' ? (
                                <ChevronUp className="h-4 w-4 text-purple-600" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-purple-600" />
                              )
                            ) : (
                              <ArrowUpDown className="h-3 w-3 text-purple-300 group-hover:text-purple-400" />
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-50">
                    {filteredInquiries.map((inquiry) => (
                      <tr key={inquiry.id} className="hover:bg-purple-50/30 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-800">{inquiry.name}</td>
                        <td className="px-6 py-4 text-purple-700">{inquiry.mobile}</td>
                        <td className="px-6 py-4 text-gray-600 uppercase text-[10px]">{inquiry.city}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] uppercase font-bold border border-purple-200">
                            {inquiry.course}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500 max-w-xs truncate" title={inquiry.address}>
                          {inquiry.address}
                        </td>
                        <td className="px-6 py-4 text-gray-500 whitespace-nowrap text-[10px]">
                          <div>{new Date(inquiry.created_at).toLocaleDateString()}</div>
                          <div className="font-bold text-purple-600">{new Date(inquiry.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
);
}

