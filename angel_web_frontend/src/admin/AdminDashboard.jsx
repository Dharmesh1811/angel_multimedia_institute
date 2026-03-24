import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function AdminDashboard() {

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
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-4">
              <p className="text-sm text-muted-foreground">Total Courses</p>
              <p className="text-3xl font-black text-purple-700">10</p>
            </div>
            <div className="rounded-xl border bg-card p-4">
              <p className="text-sm text-muted-foreground">Inquiries</p>
              <p className="text-3xl font-black text-purple-700">25</p>
            </div>
            <div className="rounded-xl border bg-card p-4">
              <p className="text-sm text-muted-foreground">Reviews</p>
              <p className="text-3xl font-black text-purple-700">18</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border bg-card p-4">
            <p className="font-semibold text-purple-800">Next step</p>
            <p className="mt-2 text-sm text-muted-foreground">
              You can now connect your real backend data to this dashboard (courses, inquiries, students, etc.).
              If you want, tell me which data/modules you need and I’ll wire up APIs + protected routes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

